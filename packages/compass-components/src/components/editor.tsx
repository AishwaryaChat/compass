import React, { useLayoutEffect, useRef } from 'react';
import { useId } from '@react-aria/utils';

if (typeof window === 'undefined' && typeof globalThis !== 'undefined') {
  // ace-builds wants to install itself on `window`, which
  // is not available when this package is loaded through
  // (non-Electron) Node.js. That's an atypical case, but it's
  // easier to account for it here than to handle all cases
  // in which this package is loaded from Node.js.
  (globalThis as any).window = {};
}

import 'ace-builds';
import type { IAceEditorProps, IAceOptions } from 'react-ace';
import AceEditor from 'react-ace';
// TODO(COMPASS-6117): Re-enable so that we can use ace workers
// import 'ace-builds/webpack-resolver';
import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/mode-csharp';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-ruby';
import 'ace-builds/src-noconflict/mode-rust';
import 'ace-builds/src-noconflict/mode-golang';
import 'ace-builds/src-noconflict/mode-php';
import beautify from 'ace-builds/src-noconflict/ext-beautify';
import 'mongodb-ace-mode';
import '../constants/mongodb-ace-theme';
import '../constants/mongodb-ace-theme-query';
import tools from 'ace-builds/src-noconflict/ext-language_tools';

/**
 * Options for the ACE editor.
 */
const DEFAULT_OPTIONS: IAceOptions = {
  enableLiveAutocompletion: false,
  tabSize: 2,
  fontSize: 11,
  minLines: 10,
  maxLines: Infinity,
  showGutter: true,
  showPrintMargin: false,
  useWorker: false,
};

const EditorVariant = {
  Shell: 'Shell',
  EJSON: 'EJSON',
  Generic: 'Generic',
} as const;

type EditorProps = {
  variant: keyof typeof EditorVariant;
  text?: string;
  id?: string;
  options?: Omit<IAceOptions, 'readOnly'>;
  readOnly?: boolean;
  completer?: unknown;
  'data-testid'?: string;
  onChangeText?: (text: string, event?: any) => void;
} & Omit<IAceEditorProps, 'onChange' | 'value'>;

function Editor({
  text,
  variant,
  options,
  readOnly,
  id,
  onChangeText,
  completer,
  onFocus,
  'data-testid': dataTestId,
  ...aceProps
}: EditorProps): React.ReactElement {
  const setOptions: IAceOptions = {
    ...DEFAULT_OPTIONS,
    ...options,
    ...(typeof readOnly === 'boolean' && { readOnly }),
    ...(variant === 'Shell' && { mode: 'ace/mode/mongodb' }),
    ...(!!completer && { enableLiveAutocompletion: true }),
  };

  const editorRef = useRef<AceEditor | null>(null);

  useLayoutEffect(() => {
    if (id && editorRef.current) {
      // After initial load, assign the id to the text area used by ace.
      // This is so labels can `htmlFor` the input.
      editorRef.current.editor.textInput.getElement().id = id;
    }
  }, [id]);

  const editorName = useId();

  const editor = (
    <AceEditor
      ref={(ref) => (editorRef.current = ref)}
      mode={
        variant === 'Generic'
          ? undefined
          : variant === 'EJSON'
          ? 'json'
          : 'javascript' // set to 'mongodb' as part of setOptions
      }
      theme="mongodb"
      width="100%"
      value={text}
      onChange={onChangeText}
      editorProps={{ $blockScrolling: Infinity }}
      setOptions={setOptions}
      readOnly={readOnly}
      commands={beautify.commands}
      // name should be unique since it gets translated to an id
      name={aceProps.name ?? editorName}
      {...aceProps}
      onFocus={(ev: any) => {
        if (completer) {
          tools.setCompleters([completer]);
        }
        onFocus?.(ev);
      }}
    />
  );

  // NOTE: we wrap the editor in a div only to add data-testid.
  // Doing so everywhere caused the styles to break in the query bar,
  // and so we add the div conditionally based on the data-testid prop.
  return dataTestId ? <div data-testid={dataTestId}>{editor}</div> : editor;
}

/**
 * Sets the editor value, use this with RTL like this:
 *
 * ```
 * render(<Editor data-testid='my-editor' />);
 * setEditorValue(screen.getByTestId('editor-test-id'), 'my text');
 * ```
 */
function setEditorValue(element: HTMLElement, value: string): void {
  const container = element.querySelector('.ace_editor');
  if (!container) {
    throw new Error('Cannot find editor container');
  }
  (window as any).ace.edit(container.id).setValue(value);
}

const EditorTextCompleter = tools.textCompleter;
export { Editor, EditorVariant, EditorTextCompleter, setEditorValue };
