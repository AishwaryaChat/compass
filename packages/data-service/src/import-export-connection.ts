import { EJSON } from 'bson';
import { cloneDeep } from 'lodash';
import type { ConnectionInfo } from './connection-info';
import type { ConnectionSecrets } from './connection-secrets';
import { extractSecrets, mergeSecrets } from './connection-secrets';
import { ConnectionStorage } from './connection-storage';
import { Decrypter, Encrypter } from './encrypt';
import createLoggerAndTelemetry from '@mongodb-js/compass-logging';

const { log, mongoLogId, track } = createLoggerAndTelemetry(
  'COMPASS-CONNECTION-IMPORT-EXPORT'
);

interface ConnectionInfoWithEncryptedData extends ConnectionInfo {
  connectionSecrets?: string;
}

const kCurrentVersion = 1;
const kFileTypeDescription = 'Compass Connections';

export interface ExportImportConnectionOptions {
  passphrase?: string;
  filter?: (info: ConnectionInfo) => boolean;
  storage?: Pick<ConnectionStorage, 'save' | 'loadAll'>;
  trackingProps?: object;
}

export interface ExportConnectionOptions extends ExportImportConnectionOptions {
  removeSecrets?: boolean;
}

export type ImportConnectionOptions = ExportImportConnectionOptions;

export async function exportConnections(
  options: ExportConnectionOptions = {}
): Promise<string> {
  const {
    storage = options.storage ?? new ConnectionStorage(),
    filter = (info) => info.favorite?.name,
    passphrase = '',
    removeSecrets = false,
    trackingProps = {},
  } = options;

  if (passphrase && removeSecrets) {
    throw new Error(
      'Cannot both specify to remove secrets and provide a passphrase for encrypting secrets'
    );
  }

  const allConnections = await storage.loadAll();
  let exportConnections: ConnectionInfoWithEncryptedData[] = cloneDeep(
    allConnections.filter(filter)
  );
  log.info(
    mongoLogId(1_001_000_151),
    'Connection Export',
    'Exporting connections',
    {
      hasPassphrase: !!passphrase,
      removeSecrets,
      count: exportConnections.length,
    }
  );
  track('Connection Exported', {
    ...trackingProps,
    count: exportConnections.length,
  });

  if (passphrase || removeSecrets) {
    const encrypter = new Encrypter(passphrase);
    exportConnections = await Promise.all(
      exportConnections.map(async (originalInfo: ConnectionInfo) => {
        const { connectionInfo, secrets } = extractSecrets(originalInfo);
        if (removeSecrets) {
          return connectionInfo;
        }
        const encrypted = await encrypter.encrypt(
          EJSON.stringify({ secrets }, { relaxed: false })
        );
        return { ...connectionInfo, connectionSecrets: encrypted };
      })
    );
  }

  const exportResult = {
    type: kFileTypeDescription,
    version: kCurrentVersion,
    connections: exportConnections,
  };

  return EJSON.stringify(exportResult, undefined, 2, { relaxed: false });
}

class CompassImportError extends Error {}

export async function importConnections(
  connectionList: string,
  options: ImportConnectionOptions = {}
): Promise<void> {
  const {
    storage = options.storage ?? new ConnectionStorage(),
    filter = () => true,
    passphrase = '',
    trackingProps = {},
  } = options;

  let connections: ConnectionInfo[];
  try {
    const parsed = EJSON.parse(connectionList) as any;
    if (
      typeof parsed !== 'object' ||
      !parsed ||
      parsed.type !== kFileTypeDescription
    ) {
      throw new CompassImportError(
        'Input is in unrecognized format (expected Compass import file)'
      );
    }
    const { version } = parsed;
    if (!version || version !== kCurrentVersion) {
      throw new CompassImportError(
        `Input is in unrecognized format (expected version ${kCurrentVersion}, got ${String(
          version
        )})`
      );
    }

    log.info(
      mongoLogId(1_001_000_152),
      'Connection Import',
      'Reading import file',
      {
        hasPassphrase: !!passphrase,
        count: parsed.connections.length,
      }
    );
    track('Connection Imported', {
      ...trackingProps,
      count: parsed.connections.length,
    });

    let decrypter: Decrypter;
    connections = await Promise.all(
      (parsed.connections as any[]).map(async (originalEntry) => {
        const { connectionSecrets, ...entry } = originalEntry ?? {};
        if (connectionSecrets) {
          if (!passphrase) {
            throw new CompassImportError(
              'Input file contains encrypted secrets but no passphrase was provided'
            );
          }
          decrypter ??= new Decrypter(passphrase);
          const { secrets } =
            (EJSON.parse(await decrypter.decrypt(connectionSecrets)) as any) ??
            {};
          if (!secrets) {
            throw new CompassImportError(
              'Input file contained invalid encrypted data'
            );
          }
          return mergeSecrets(entry, secrets as ConnectionSecrets);
        }
        return entry as ConnectionInfo;
      })
    );
  } catch (err: any) {
    if (err instanceof CompassImportError) {
      throw err;
    }
    const newErr = new CompassImportError(
      `Could not parse connections list: ${String(err.message)}`
    );
    newErr.stack = err.stack;
    throw newErr;
  }

  connections = connections.filter(filter);

  log.info(
    mongoLogId(1_001_000_149),
    'Connection Import',
    'Starting connection import',
    {
      count: connections.length,
    }
  );

  // All validation that we do should have been completed before starting
  // to save connections.
  for (const info of connections) {
    await storage.save(info);
  }

  log.info(
    mongoLogId(1_001_000_150),
    'Connection Import',
    'Connection import complete',
    {
      count: connections.length,
    }
  );
}
