// Settings Modal
export const SettingsModal = '[data-testid="settings-modal"]';
export const CloseSettingsModalButton =
  '[data-testid="settings-modal"] [aria-label="Close modal"]';

// Feature Tour Modal
export const FeatureTourModal = '[data-testid="feature-tour-modal"]';
export const CloseFeatureTourModal = '[data-testid="close-tour-button"]';

// Connection screen
export const ConnectSection = '[data-testid="connections-disconnected"]';
export const ConnectButton = '[data-testid="connect-button"]';
export const ConnectionFormSaveAndConnectButton =
  '[data-testid="save-and-connect-button"]';
export const ConnectionStringInput = 'textarea[data-testid="connectionString"]';
export const ConnectionFormEditFavouriteButton =
  '[data-testid="edit-favorite-icon-button"]';
export const ConnectionTitle = '[data-testid="connection-form"] h3';
export const CancelConnectionButton =
  '[data-testid="cancel-connection-button"]';
export const ConnectionStatusModalContent =
  '[data-testid="connecting-modal-content"]';
export const ShowConnectionFormButton =
  '[data-testid="advanced-connection-options"]';
export const ConnectionForm = '[data-testid="connection-form"]';
export const ConnectionFormGeneralTabButton =
  '[data-testid="connection-general-tab"]';
export const ConnectionFormAuthenticationTabButton =
  '[data-testid="connection-authentication-tab"]';
export const ConnectionFormTLSTabButton = '[data-testid="connection-tls-tab"]';
export const ConnectionFormTLSONButton =
  'label[for="connection-tls-enabled-ON-radio-button"]';
export const ConnectionFormTLSOFFButton =
  'label[for="connection-tls-enabled-OFF-radio-button"]';
export const ConnectionFormInputHost =
  '[data-testid="connection-host-input-0"]';
export const ConnectionFormInputSrvRecord =
  'label[for="connection-scheme-srv-radiobox"]';
export const ConnectionFormDefaultAuthMethodButton =
  'label[for="connection-authentication-method-DEFAULT-button"]';
export const ConnectionFormInputUsername =
  '[data-testid="connection-username-input"]';
export const ConnectionFormInputPassword =
  '[data-testid="connection-password-input"]';
export const ConnectionFormErrorMessage =
  '[data-testid="connection-error-summary"]';

export const AdvancedOptionsTabs = '[aria-label="Advanced Options Tabs"]';
export const SelectedAdvancedOptionsTab = `${AdvancedOptionsTabs} [aria-selected="true"]`;

export const ConnectionFormSchemeRadios =
  '#connection-scheme-radio-box-group input[type="radio"]';
export const ConnectionFormHostInputs =
  '[aria-labelledby="connection-host-input-label"]';
export const ConnectionFormDirectConnectionCheckbox =
  '#direct-connection-checkbox';
export const ConnectionFormAuthenticationMethodRadios =
  '#authentication-method-radio-box-group input[type="radio"]';
export const ConnectionFormInputAuthSource = '#authSourceInput';
export const ConnectionFormAuthMechanismRadios =
  '#authentication-mechanism-radio-box-group input[type="radio"]';
export const ConnectionFormInputGssApiPrincipal =
  '[data-testid="gssapi-principal-input"]';
export const ConnectionFormInputGssApiServiceName =
  '[data-testid="gssapi-service-name-input"]';
export const ConnectionFormCanonicalizeHostNameRadios =
  '#canonicalize-hostname-select input[type="radio"]';
export const ConnectionFormInputGssApiServiceRealm =
  '[data-testid="gssapi-service-realm-input"]';
export const ConnectionFormGssApiPasswordCheckbox =
  '[data-testid="gssapi-password-checkbox"]';
export const ConnectionFormInputGssApiPassword =
  '[data-testid="gssapi-password-input"]';
export const ConnectionFormInputPlainUsername =
  '[data-testid="connection-plain-username-input"]';
export const ConnectionFormInputPlainPassword =
  '[data-testid="connection-plain-password-input"]';
export const ConnectionFormInputAWSAccessKeyId =
  '[data-testid="connection-form-aws-access-key-id-input"]';
export const ConnectionFormInputAWSSecretAccessKey =
  '[data-testid="connection-form-aws-secret-access-key-input"]';
export const ConnectionFormInputAWSSessionToken =
  '[data-testid="connection-form-aws-secret-token-input"]';

export const ConnectionFormInputFLEKeyVaultNamespace =
  '[data-testid="csfle-keyvault"]';
export const ConnectionFormInputFLEStoreCredentialsCheckbox =
  '[data-testid="csfle-store-credentials-input"]';
export const ConnectionFormInputFLELocalKMS =
  '[data-testid="csfle-kms-provider-local"]';
export const ConnectionFormInputFLELocalKey =
  '[data-testid="csfle-kms-local-key"]';
export const ConnectionFormInputFLEEncryptedFieldsMap =
  '[data-testid="connection-csfle-encrypted-fields-map"]';

export const ConnectionFormSSLConnectionRadios =
  '#tls-radio-box-group input[type="radio"]';
export const ConnectionFormTlsCaButton = '#tlsCAFile';
export const ConnectionFormTlsCertificateKeyButton = '#tlsCertificateKeyFile';
export const ConnectionFormTlsCaFile = '[data-testid="tlsCAFile-input"]';
export const ConnectionFormTlsCertificateKeyFile =
  '[data-testid="tlsCertificateKeyFile-input"]';
export const ConnectionFormInputTlsCertificateKeyFilePassword =
  '[data-testid="tlsCertificateKeyFilePassword-input"]';
export const ConnectionFormTlsInsecureCheckbox =
  '[data-testid="tlsInsecure-input"]';
export const ConnectionFormTlsAllowInvalidHostnamesCheckbox =
  '[data-testid="tlsAllowInvalidHostnames-input"]';
export const ConnectionFormTlsAllowInvalidCertificatesCheckbox =
  '[data-testid="tlsAllowInvalidCertificates-input"]';
export const ConnectionFormTlsUseSystemCACheckbox =
  '[data-testid="useSystemCA-input"]';
export const ConnectionFormProxyMethodRadios =
  '#ssh-options-radio-box-group input[type="radio"]';
export const ConnectionFormInputSshPasswordHost =
  '[data-testid="ssh-password-tab-content"] [data-testid="host"]';
export const ConnectionFormInputSshPasswordPort =
  '[data-testid="ssh-password-tab-content"] [data-testid="port"]';
export const ConnectionFormInputSshPasswordUsername =
  '[data-testid="ssh-password-tab-content"] [data-testid="username"]';
export const ConnectionFormInputSshPasswordPassword =
  '[data-testid="ssh-password-tab-content"] [data-testid="password"]';
export const ConnectionFormInputSshIdentityHost =
  '[data-testid="ssh-identity-tab-content"] [data-testid="host"]';
export const ConnectionFormInputSshIdentityPort =
  '[data-testid="ssh-identity-tab-content"] [data-testid="port"]';
export const ConnectionFormInputSshIdentityUsername =
  '[data-testid="ssh-identity-tab-content"] [data-testid="username"]';
export const ConnectionFormSshIdentityKeyButton =
  '[data-testid="ssh-identity-tab-content"]  #identityKeyFile';
export const ConnectionFormSshIdentityKeyFile =
  '[data-testid="ssh-identity-tab-content"] [data-testid="identityKeyFile"]';
export const ConnectionFormInputSshIdentityPassword =
  '[data-testid="ssh-identity-tab-content"] [data-testid="identityKeyPassphrase"]';
export const ConnectionFormInputSocksHost =
  '[data-testid="socks-tab-content"] [data-testid="proxyHost"]';
export const ConnectionFormInputSocksPort =
  '[data-testid="socks-tab-content"] [data-testid="proxyPort"]';
export const ConnectionFormInputSocksUsername =
  '[data-testid="socks-tab-content"] [data-testid="proxyUsername"]';
export const ConnectionFormInputSocksPassword =
  '[data-testid="socks-tab-content"] [data-testid="proxyPassword"]';
export const ConnectionFormReadPreferenceRadios =
  '#read-preferences input[type="radio"]';
export const ConnectionFormInputReplicaset =
  '[data-testid="connection-advanced-tab"] [data-testid="replica-set"]';
export const ConnectionFormInputDefaultDatabase =
  '[data-testid="connection-advanced-tab"] [data-testid="default-database"]';
export const ConnectionFormUrlOptionKeys =
  '[data-testid="connection-advanced-tab"] button[name="name"]';
export const ConnectionFormUrlOptionValues =
  '[data-testid="connection-advanced-tab"] input[aria-labelledby="Enter value"]';

export const advancedOptionsTab = (tabName: string): string => {
  return `${AdvancedOptionsTabs} button[name="${tabName}"]`;
};
export const advancedOptionsTabPanel = (tabName: string): string => {
  return `[role="tabpanel"][aria-label="${tabName}"]`;
};
export const connectionFormSchemeRadio = (value: string): string => {
  return `#connection-scheme-radio-box-group input[value="${value}"]`;
};
export const connectionFormAuthenticationMethodRadio = (
  value: string
): string => {
  return `#authentication-method-radio-box-group input[value="${value}"]`;
};
export const connectionFormAuthMechanismRadio = (value: string): string => {
  return `#authentication-mechanism-radio-box-group input[value="${value}"]`;
};
export const connectionFormCanonicalizeHostNameRadio = (
  value: string
): string => {
  return `#canonicalize-hostname-select input[value="${value}"]`;
};
export const connectionFormSSLConnectionRadio = (value: string): string => {
  return `#tls-radio-box-group input[value="${value}"]`;
};
export const connectionFormProxyMethodRadio = (value: string): string => {
  return `#ssh-options-radio-box-group input[value="${value}"]`;
};
export const connectionFormReadPreferenceRadio = (value: string): string => {
  return `#read-preferences input[value="${value}"]`;
};
export const connectionFormUrlOptionKeyButton = (index: number): string => {
  return `[data-testid="url-options-table"] tr:nth-child(${
    index + 1
  }) button[name="name"]`;
};
export const connectionFormUrlOptionValueInput = (index: number): string => {
  return `[data-testid="url-options-table"] tr:nth-child(${
    index + 1
  }) input[aria-labelledby="Enter value"]`;
};

// Connection Sidebar
export const SidebarNewConnectionButton =
  '[data-testid="new-connection-button"]';
export const FavoriteConnections = '[data-testid="favorite-connection"]';
export const ConnectionMenu = '[data-testid="connection-menu"]';
export const CopyConnectionStringItem = `${ConnectionMenu} [data-testid="copy-connection-string"]`;
export const DuplicateConnectionItem = `${ConnectionMenu} [data-testid="duplicate-connection"]`;
export const RemoveConnectionItem = `${ConnectionMenu} [data-testid="remove-connection"]`;
export const RecentConnectionsHeader = '[data-testid="recents-header"]';
export const RecentConnections = '[data-testid="recent-connection"]';

// Database-Collection Sidebar
export const SidebarDatabaseAndCollectionList =
  '[data-testid="databases-and-collections"]';
export const SidebarTreeItems = `${SidebarDatabaseAndCollectionList} [role="treeitem"]`;
export const SidebarFilterInput = '[data-testid="sidebar-filter-input"]';
export const SidebarTitle = '[data-testid="sidebar-title"]';
export const SidebarShowActions =
  '[data-testid="sidebar-title-actions-show-actions"]';
export const SidebarActionRefresh =
  '[data-testid="sidebar-title-actions-refresh-data-action"]';
export const SidebarActionClusterInfo =
  '[data-testid="sidebar-title-actions-open-connection-info-action"]';
export const SidebarCreateDatabaseButton =
  '[data-testid="sidebar-navigation-item-actions-open-create-database-action"]';
export const CollectionShowActionsButton =
  '[data-testid="sidebar-collection-item-actions-show-actions"]';
export const DropDatabaseButton = '[data-action="drop-database"]';
export const CreateCollectionButton = '[data-action="create-collection"]';
export const DropCollectionButton = '[data-action="drop-collection"]';
export const FleConnectionConfigurationBanner =
  '[data-testid="fle-connection-configuration"]';
export const SetCSFLEEnabledLabel = '[id="set-csfle-enabled"]';
export const CSFLEConnectionModal = '[data-testid="csfle-connection-modal"]';
export const CSFLEConnectionModalCloseButton = `${CSFLEConnectionModal} [aria-label*="Close"]`;
export const ConnectionInfoModal = '[data-testid="connection-info-modal"]';
export const ConnectionInfoModalCloseButton = `${ConnectionInfoModal} [aria-label*="Close"]`;

export const sidebarDatabase = (dbName: string): string => {
  return `[data-testid="sidebar-database-${dbName}"]`;
};

export const sidebarDatabaseToggle = (dbName: string): string => {
  return `[data-testid="sidebar-database-${dbName}"] button[type=button]`;
};

export const sidebarCollection = (
  dbName: string,
  collectionName: string
): string => {
  return `[data-testid="sidebar-collection-${dbName}.${collectionName}"]`;
};

export const sidebarFavorite = (favoriteName: string): string => {
  return `${FavoriteConnections}[data-id="favorite-connection-${favoriteName}"]`;
};

export const sidebarFavoriteButton = (favoriteName: string): string => {
  return `${sidebarFavorite(favoriteName)} > div > button`;
};

export const sidebarFavoriteMenuButton = (favoriteName: string): string => {
  return `${sidebarFavorite(
    favoriteName
  )}  button[aria-label="Connection Options Menu"]`;
};

// Favorite modal
export const FavoriteModal = '[data-testid="favorite_modal"]';
export const FavoriteNameInput = '[data-testid="favorite-name-input"]';
export const FavoriteColorSelector = '#favorite-color-selector';
export const FavoriteSaveButton =
  '[data-testid="favorite_modal"] [role=dialog] > div:nth-child(2) button:first-child';

// Create database modal
export const CreateDatabaseModal = '[data-testid="create_database_modal"]';
export const CreateDatabaseDatabaseName = '[data-testid="database-name"]';
export const CreateDatabaseCollectionName = '[data-testid="collection-name"]';
export const CreateDatabaseErrorMessage =
  '[data-testid="create_database_modal"] [role="alert"]';
export const CreateDatabaseCreateButton =
  '[data-testid="create_database_modal"] [role=dialog] > div:nth-child(2) button:first-child';
export const CreateDatabaseCancelButton =
  '[data-testid="create_database_modal"] [role=dialog] > div:nth-child(2) button:last-child';

// Drop database modal
export const DropDatabaseModal = '[data-testid="drop_database_modal"]';
export const DropDatabaseConfirmName =
  '[data-testid="confirm-drop-database-name"]';
export const DropDatabaseDropButton =
  '[data-testid="drop_database_modal"] [role=dialog] > div:nth-child(2) button:first-child';

// Create collection modal
export const CreateCollectionModal = '[data-testid="create_collection_modal"]';
export const CreateCollectionCollectionName = '[data-testid="collection-name"]';
export const CreateCollectionErrorMessage =
  '[data-testid="create_collection_modal"] [role="alert"]';
export const CreateCollectionCreateButton =
  '[data-testid="create_collection_modal"] [role=dialog] > div:nth-child(2) button:first-child';
export const CreateCollectionCancelButton =
  '[data-testid="create_collection_modal"] [role=dialog] > div:nth-child(2) button:last-child';
export const CreateCollectionCappedCheckboxLabel =
  '[data-testid="capped-collection-fields"] #toggle-capped-collection-fields-label';
export const CreateCollectionCappedSizeInput =
  '[data-testid="capped-collection-fields"] [data-testid="capped-size"]';
export const CreateCollectionCollectionOptionsAccordion =
  '[data-testid="create_collection_modal"] [data-testid="advanced-collection-options"]';
export const CreateCollectionCustomCollationCheckboxLabel =
  '[data-testid="use-custom-collation-fields"] #toggle-use-custom-collation-fields-label';

export const CreateCollectionFLE2CheckboxLabel =
  '[data-testid="fle2-fields"] #toggle-fle2-fields-label';
export const CreateCollectionFLE2 = '[data-testid="fle2-fields"]';
export const CollectionListFLE2Badge = '[data-testid="collection-badge-fle2"]';
export const CollectionHeaderFLE2Badge =
  '[data-testid="collection-header-badge-fle2"]';

export const CreateCollectionTimeseriesCheckboxLabel =
  '[data-testid="time-series-fields"] #toggle-time-series-fields-label';
export const CreateCollectionTimeseriesTimeField =
  '[data-testid="time-series-fields"] [name="timeSeries.timeField"]';
export const CreateCollectionTimeseriesMetaField =
  '[data-testid="time-series-fields"] [name="timeSeries.metaField"]';
export const CreateCollectionTimeseriesGranularityButton =
  '[data-testid="time-series-fields"] [name="timeSeries.granularity"]';
export const CreateCollectionTimeseriesGranularityMenu =
  '[data-testid="time-series-fields"] #timeSeries-granularity-menu';
export const CreateCollectionTimeseriesExpireAfterSeconds =
  '[data-testid="time-series-fields"] [name="expireAfterSeconds"]';

export const CreateCollectionClusteredCheckboxLabel =
  '[data-testid="clustered-collection-fields"] #toggle-clustered-collection-fields-label';
export const CreateCollectionClusteredNameField =
  '[data-testid="clustered-collection-fields"] [name="clusteredIndex.name"]';
export const CreateCollectionClusteredExpireAfterSeconds =
  '[data-testid="clustered-collection-fields"] [name="expireAfterSeconds"]';

export const createCollectionCustomCollationFieldButton = (
  fieldName: string
): string => {
  return `[data-testid="use-custom-collation-fields"] [name="${fieldName}"]`;
};

export const createCollectionCustomCollationFieldMenu = (
  fieldName: string
): string => {
  return `[data-testid="use-custom-collation-fields"] #collation-field-${fieldName}-menu`;
};

// Drop collection modal
export const DropCollectionModal = '[data-testid="drop_collection_modal"]';
export const DropCollectionConfirmName =
  '[data-testid="confirm-drop-collection-name"]';
export const DropCollectionDropButton =
  '[data-testid="drop_collection_modal"] [role=dialog] > div:nth-child(2) button:first-child';

// Shell
export const ShellContent = '[data-testid="shell-content"]';
export const ShellExpandButton = '[data-testid="shell-expand-button"]';
export const ShellInput = '[data-testid="shell-content"] .ace_content';
export const ShellOutput =
  '[data-testid="shell-content"] [class^=mongosh-shell-output-line] pre';
export const ShellLoader =
  '[data-testid="shell-content"] [class~=mongosh-shell-loader-shell-loader]';

// Query bar (Find, Schema, Explain Plan)
export const QueryBarMenuActions = '#query-bar-menu-actions';

// Instance screen
export const InstanceTabs = '[data-testid="instance-tabs"]';
export const InstanceTab = '.test-tab-nav-bar-tab';
export const DatabasesTable = '[data-testid="database-grid"]';
export const InstanceCreateDatabaseButton =
  '[data-testid="database-grid"] [data-testid="create-controls"] button';
export const DatabaseCard = '[data-testid="database-grid-item"]';
// assume that there's only one hovered card at a time and that the first and only button is the drop button
export const DatabaseCardDrop =
  '[data-testid="database-grid"] [data-testid="namespace-card-actions"] button';
export const ServerStats = '.serverstats';

export const instanceTab = (tabName: string, selected?: boolean): string => {
  const selector = `${InstanceTab}[name="${tabName}"]`;

  if (selected === true) {
    return `${selector}[aria-selected="true"]`;
  }

  if (selected === false) {
    return `${selector}[aria-selected="false"]`;
  }

  return selector;
};
export const databaseCard = (dbName: string): string => {
  return `${DatabaseCard}[data-id="${dbName}"]`;
};

export const databaseCardClickable = (dbName: string): string => {
  // webdriver does not like clicking on the card even though the card has the
  // click handler, so click on the title
  return `${databaseCard(dbName)} [title="${dbName}"]`;
};

// Database screen
export const DatabaseTabs = '[data-testid="database-tabs"]';
export const DatabaseTab = '.test-tab-nav-bar-tab';
export const CollectionsGrid = '[data-testid="collection-grid"]';
export const DatabaseCreateCollectionButton =
  '[data-testid="collection-grid"] [data-testid="create-controls"] button';
export const CollectionCard = '[data-testid="collection-grid-item"]';
// assume that there's only one hovered card at a time and that the first and only button is the drop button
export const CollectionCardDrop =
  '[data-testid="collection-grid"] [data-testid="namespace-card-actions"] button';

export const databaseTab = (tabName: string, selected?: boolean): string => {
  const selector = `${DatabaseTab}[name="${tabName}"]`;

  if (selected === true) {
    return `${selector}[aria-selected="true"]`;
  }

  if (selected === false) {
    return `${selector}[aria-selected="false"]`;
  }

  return selector;
};

export const collectionCard = (
  dbName: string,
  collectionName: string
): string => {
  return `${CollectionCard}[data-id="${dbName}.${collectionName}"]`;
};

export const collectionCardClickable = (
  dbName: string,
  collectionName: string
): string => {
  // webdriver does not like clicking on the card even though the card has the
  // click handler, so click on the title
  return `${collectionCard(
    dbName,
    collectionName
  )} [title="${collectionName}"]`;
};

// Collection screen
export const CollectionTab = '.test-tab-nav-bar-tab';
export const CollectionHeaderTitle = '[data-testid="collection-header-title"]';
export const CollectionHeaderNamespace =
  '[data-testid="collection-header-namespace"]';
export const DocumentCountValue = '[data-testid="document-count-value"]';
export const CollectionStatsTooltip =
  '[data-testid="collection-stats-tooltip"]';
export const TooltipDocumentsCountValue =
  '[data-testid="tooltip-documents-count"]';
export const TooltipDocumentsStorageSize =
  '[data-testid="tooltip-documents-storage-size"]';
export const TooltipDocumentsAvgSize =
  '[data-testid="tooltip-documents-avg-size"]';
export const IndexCountValue = '[data-testid="index-count-value"]';
export const TooltipIndexesCount = '[data-testid="tooltip-indexes-count"]';
export const TooltipIndexesTotalSize =
  '[data-testid="tooltip-indexes-total-size"]';
export const TooltipIndexesAvgSize = '[data-testid="tooltip-indexes-avg-size"]';

export const collectionTab = (tabName: string, selected?: boolean): string => {
  const selector = `${CollectionTab}[name="${tabName}"]`;

  if (selected === true) {
    return `${selector}[aria-selected="true"]`;
  }

  if (selected === false) {
    return `${selector}[aria-selected="false"]`;
  }

  return selector;
};
export const collectionContent = (tabName: string): string => {
  const tn = tabName.toLowerCase().replace(/ /g, '-');
  return `[data-testid="${tn}-content"]`;
};
export const collectionHeaderTitle = (
  dbName: string,
  collectionName: string
): string => {
  return `${CollectionHeaderTitle}[title="${dbName}.${collectionName}"]`;
};

// Documents tab
export const DocumentListActionBarMessage =
  '[data-testid="crud-document-count-display"]';
export const ExportCollectionButton =
  '[data-testid="export-collection-button"]';
export const DocumentListFetching =
  '[data-testid="documents-content"] [data-testid="fetching-documents"]';
export const DocumentListFetchingStopButton =
  '[data-testid="documents-content"] [data-testid="fetching-documents"] button';
export const DocumentListError =
  '[data-testid="documents-content"] .status-row-has-error';
export const AddDataButton = '[data-testid="crud-add-data-button"]';
export const InsertDocumentOption =
  '[data-testid="crud-add-data-insert-document"]';
export const ImportFileOption = '[data-testid="crud-add-data-import-file"]';
export const DocumentListEntry = '[data-testid="editable-document"]';
export const DocumentJSONEntry = '[data-testid="document-json-item"]';
export const SelectJSONView = '[data-testid="toolbar-view-json"]';
export const SelectTableView = '[data-testid="toolbar-view-table"]';
export const SelectListView = '[data-testid="toolbar-view-list"]';
export const CopyDocumentButton = '[data-testid="copy-document-button"]';
export const CloneDocumentButton = '[data-testid="clone-document-button"]';
export const DeleteDocumentButton = '[data-testid="remove-document-button"]';
export const DocumentFooter = '[data-testid="document-footer"]';
export const DocumentFooterMessage = '[data-testid="document-footer-message"]';
export const UpdateDocumentButton = `${DocumentFooter} [data-testid="update-button"]`;
export const ConfirmDeleteDocumentButton = `${DocumentFooter} [data-testid="delete-button"]`;

// Insert Document modal

export const InsertDialog = '.insert-document-dialog';
export const InsertDialogErrorMessage =
  '[data-testid="insert_document_modal"] .document-footer.document-footer-is-error .document-footer-message';
export const InsertJSONEditor = '.insert-document-dialog .ace_editor';
export const InsertConfirm =
  '.insert-document-dialog [role=dialog] > div:nth-child(2) button:first-child';
export const InsertCancel =
  '.insert-document-dialog [role=dialog] > div:nth-child(2) button:last-child';
export const insertCSFLEHasKnownSchemaMsg =
  '[data-testid="insert-csfle-has-known-schema"]';
export const incompleteSchemaForClonedDocMsg =
  '[data-testid="incomplete-schema-for-cloned-doc"]';

// Import File modal

export const ImportModal = '[data-testid="import-modal"]';
export const ImportDelimiter = '[id="import-delimiter-select"]';
export const ImportFileInput = '#import-file_file_input';
export const FileTypeJSON = '[data-testid="select-file-type-json"]';
export const FileTypeCSV = '[data-testid="select-file-type-csv"]';
export const ImportConfirm =
  '[data-testid="import-modal"] [data-testid="import-button"]';
export const ImportCancel =
  '[data-testid="import-modal"] [data-testid="cancel-button"]';
export const ImportDone =
  '[data-testid="import-modal"] [data-testid="done-button"]';
export const ImportErrorBox = '[data-testid="import-error-box"]';

export const importPreviewFieldHeaderSelect = (fieldName: string): string => {
  return `[data-testid="preview-field-header-${fieldName}"] select`;
};

export const importPreviewFieldHeaderCheckbox = (fieldName: string): string => {
  return `[data-testid="preview-field-header-${fieldName}"] input[type="checkbox"]`;
};

// Hadron document editor

export const HadronDocument = '[data-testid="hadron-document"]';
export const HadronDocumentElement = '[data-testid="hadron-document-element"]';
export const HadronDocumentKey = '[data-testid="hadron-document-element-key"]';
export const HadronDocumentClickableKey =
  '[data-testid="hadron-document-clickable-key"]';
export const HadronDocumentKeyEditor =
  '[data-testid="hadron-document-key-editor"]';
export const HadronDocumentValue =
  '[data-testid="hadron-document-element-value"]';
export const HadronDocumentValueEditor =
  '[data-testid="hadron-document-value-editor"]';
export const HadronDocumentClickableValue =
  '[data-testid="hadron-document-clickable-value"]';
export const HadronDocumentType =
  '[data-testid="hadron-document-element-type"]';
export const HadronDocumentAddElementMenuButton =
  '[data-testid="hadron-document-add-element"]';
export const HadronDocumentAddChildButton =
  '[data-testid="hadron-document-add-child"]';
export const HadronDocumentAddSibling =
  '[data-testid="hadron-document-add-sibling"]';
export const HadronDocumentRevertElement =
  '[data-testid="hadron-document-revert"]';
export const HadronDocumentRemoveElement =
  '[data-testid="hadron-document-remove"]';
export const HadronDocumentElementDecryptedIcon =
  '[data-testid="hadron-document-element-decrypted-icon"]';

// Document list view

export const DocumentListItem = '[data-testid="document-list-item"]';
export const documentListDocument = (n: number): string => {
  return `${DocumentListItem}:nth-child(${n}) ${HadronDocument}`;
};
export const documentListDocumentKey = (n: number): string => {
  return `${DocumentListItem}:nth-child(${n}) ${HadronDocumentKey}`;
};
export const documentListDocumentValue = (n: number): string => {
  return `${DocumentListItem}:nth-child(${n}) ${HadronDocumentValue}`;
};

// Query bar history

export const QueryBarHistoryButton = '[data-testid="query-history-button"]';
export const QueryBarHistory = '[data-testid="query-history"]';

export const QueryHistoryRecentItem = '[data-testid="recent-query-list-item"]';
export const QueryHistoryFavoriteAnItemButton =
  '[data-testid="query-history-button-fav"]';
export const QueryHistoryFavoriteItemNameField =
  '[data-testid="query-history-saving-form-input-name"]';
export const QueryHistorySaveFavoriteItemButton =
  '[data-testid="query-history-saving-form-button-save"]';

export const myQueriesItem = (title: string): string => {
  return `[title="${title}"]`;
};

export const MyQueriesList = '[data-testid="my-queries-list"]';

// Aggregations tab
export const StageContainer = '[data-testid="stage-container"]';
export const CreateNewPipelineMenuButton = '[data-testid="create-new-menu"]';
export const CreateNewPipelineMenuContent =
  '[data-testid="create-new-menu-content"]';
export const CreateNewEmptyPipelineAction =
  '[data-testid="create-new-menu-createPipleine"]';
export const CreateNewPipelineFromTextAction =
  '[data-testid="create-new-menu-createPipleineFromText"]';
export const AggregationAdditionalOptionsButton =
  '[data-testid="pipeline-toolbar-options-button"]';
export const AggregationCollationInput = '[data-testid="collation-string"]';
export const AggregationMaxTimeMSInput = '[data-testid="max-time-ms"]';
export const AggregationBuilderWorkspace =
  '[data-testid="pipeline-builder-workspace"]';
export const AggregationResultsWorkspace =
  '[data-testid="pipeline-results-workspace"]';
export const AggregationResultsDocumentListSwitchButton =
  '[aria-label="Document list"] button';
export const AggregationResultsJSONListSwitchButton =
  '[aria-label="JSON list"] button';
export const AggregationRestultsPaginationDescription =
  '[data-testid="pipeline-pagination-desc"]';
export const AggregationRestultsNextPageButton =
  '[data-testid="pipeline-pagination-next-action"]';
export const AggregationRestultsPrevPageButton =
  '[data-testid="pipeline-pagination-prev-action"]';
export const AggregationResultsCancelButton =
  '[data-testid="pipeline-results-loader-button"]';
export const AggregationEmptyResults = '[data-testid="pipeline-empty-results"]';

export const AggregationSettingsButton =
  '[data-testid="pipeline-toolbar-settings-button"]';
export const AggregationCommentModeCheckbox = '#aggregation-comment-mode';
export const AggregationSampleSizeInput = '#aggregation-sample-size';
export const AggregationSettingsApplyButton = '#aggregation-settings-apply';
export const AddStageButton = '[data-testid="add-stage"]';
export const ExportAggregationToLanguage =
  '[data-testid="pipeline-toolbar-export-button"]';
export const NewPipelineActions = '#new-pipeline-actions';
export const NewPipelineActionsMenu = `${NewPipelineActions} + [role="menu"]`;
export const SavePipelineMenuButton = '[data-testid="save-menu"]';
export const SavePipelineMenuContent = '[data-testid="save-menu-content"]';
export const SavePipelineCreateViewAction =
  '[data-testid="save-menu-createView"]';
export const SavePipelineSaveAsAction = '[data-testid="save-menu-saveAs"]';
export const AggregationAutoPreviewToggle =
  '[data-testid="pipeline-toolbar-preview-toggle"]';
export const AggregationErrorBanner = '[data-testid="pipeline-results-error"]';

export const RunPipelineButton = `[data-testid="pipeline-toolbar-run-button"]`;
export const EditPipelineButton = `[data-testid="pipeline-toolbar-edit-button"]`;
export const GoToCollectionButton = `[data-testid="pipeline-results-go-to-collection"]`;
export const ExportAggregationResultsButton = `[data-testid="pipeline-toolbar-export-aggregation-button"]`;

// New Aggregation Toolbar Specific
export const AggregationToolbarCreateMenu = '[data-testid="create-new-menu"]';
export const AggregationToolbarCreateNewPipeline =
  '[data-testid="create-new-menu-content"]  > li:nth-child(1)';
export const AggregationExplainButton =
  '[data-testid="pipeline-toolbar-explain-aggregation-button"]';
export const AggregationExplainModal = '[data-testid="pipeline-explain-modal"]';
export const AggregationExplainModalCloseButton = `${AggregationExplainModal} [aria-label*="Close"]`;

// Create view from pipeline modal
export const CreateViewModal = '[data-testid="create_view_modal"]';
export const CreateViewNameInput = '#create-view-name';

// Save aggregation from pipeline modal
export const SavePipelineModal = '[data-testid="save_pipeline_modal"]';
export const SavePipelineNameInput = '#save-pipeline-name';

export const stageOperatorOptions = (stageIndex: number): string => {
  return `[data-stage-index="${stageIndex}"] [role="option"]`;
};
export const stageEditor = (stageIndex: number): string => {
  return `#aggregations-stage-editor-${stageIndex}`;
};
export const stagePreviewToolbarTooltip = (stageIndex: number): string => {
  return `[data-stage-index="${stageIndex}"] [data-testid="stage-preview-toolbar-tooltip"]`;
};
export const atlasOnlyStagePreviewSection = (stageIndex: number): string => {
  return `[data-stage-index="${stageIndex}"] [data-testid="stage-preview-missing-search-support"]`;
};
export const stagePreviewEmpty = (stageIndex: number): string => {
  return `[data-stage-index="${stageIndex}"] [data-testid="stage-preview-empty"]`;
};
export const stageCollapseButton = (stageIndex: number): string => {
  return `[data-stage-index="${stageIndex}"] button[title="Collapse"]`;
};
export const stageExpandButton = (stageIndex: number): string => {
  return `[data-stage-index="${stageIndex}"] button[title="Expand"]`;
};
export const stageSelectControlInput = (
  stageIndex: number,
  expanded?: boolean
): string => {
  const selector = `[data-stage-index="${stageIndex}"] .Select-control input`; // [role="combobox"]

  if (expanded === true) {
    return `${selector}[aria-expanded="true"]`;
  }

  if (expanded === false) {
    return `${selector}[aria-expanded="false"]`;
  }

  return selector;
};
export const stageTextarea = (stageIndex: number): string => {
  return `[data-stage-index="${stageIndex}"] .ace_editor textarea`; // .ace_text-input
};
export const stageContent = (stageIndex: number): string => {
  return `[data-stage-index="${stageIndex}"] .ace_content`;
};
export const stageAdd = (stageIndex: number): string => {
  return `[data-stage-index="${stageIndex}"] [data-testid="add-after-stage"]`;
};
export const stageToggle = (stageIndex: number): string => {
  return `[data-stage-index="${stageIndex}"] #toggle-stage-button`;
};
export const stageDelete = (stageIndex: number): string => {
  return `[data-stage-index="${stageIndex}"] [data-testid="delete-stage"]`;
};
export const stageOutSaveButton = (stageIndex: number): string => {
  return `[data-stage-index="${stageIndex}"] [data-testid="save-out-documents"]`;
};
export const stageOutCollectionLink = (stageIndex: number): string => {
  return `[data-stage-index="${stageIndex}"] [data-testid="go-to-out-collection"]`;
};
export const stageMergeSaveButton = (stageIndex: number): string => {
  return `[data-stage-index="${stageIndex}"] [data-testid="save-merge-documents"]`;
};
export const stageMergeCollectionLink = (stageIndex: number): string => {
  return `[data-stage-index="${stageIndex}"] [data-testid="go-to-merge-collection"]`;
};
export const stageEditorErrorMessage = (stageIndex: number): string => {
  return `[data-stage-index="${stageIndex}"] [data-testid="stage-editor-error-message"]`;
};
export const stageEditorSyntaxErrorMessage = (stageIndex: number): string => {
  return `[data-stage-index="${stageIndex}"] [data-testid="stage-editor-syntax-error"]`;
};

// Schema tab
export const AnalyzeSchemaButton = '[data-testid="analyze-schema-button"]';
export const SchemaFieldList = '.schema-field-list';
export const AnalysisMessage =
  '[data-testid="schema-content"] [data-testid="schema-analysis-message"]';
export const SchemaField = '.schema-field';
export const SchemaFieldName = '.schema-field-name';
export const SchemaFieldTypeList = '.schema-field-type-list';

// Explain Plan tab
export const ExecuteExplainButton = '[data-testid="execute-explain-button"]';
export const ExplainSummary = '[data-testid="explain-summary"]';
export const ExplainStage = '[data-testid="explain-stage"]';
export const ExplainDocumentsReturnedSummary =
  '[data-testid="documents-returned-summary"]';

// Indexes tab
export const IndexList = '[data-testid="indexes-list"]';
export const IndexComponent = (name: string): string => {
  return `[data-testid="index-row-${name}"]`;
};
export const IndexFieldName = '[data-testid="index-name-field"]';
export const IndexFieldType = '[data-testid="index-type-field"]';
export const IndexToggleOptions =
  '[data-testid="create-index-modal-toggle-options"]';
export const IndexToggleIsWildcard =
  '[data-testid="create-index-modal-use-wildcard-checkbox-fieldset"] #create-index-modal-use-wildcard-checkbox-label';
export const IndexWildcardProjectionEditor =
  '[data-testid="create-index-modal-use-wildcard-checkbox-fieldset"] .ace_editor';

export const CreateIndexButton =
  '[data-testid="open-create-index-modal-button"]';

// Indexes modal
export const CreateIndexModal = '[data-testid="create-index-modal"]';

export const CreateIndexModalFieldNameSelectInput = (idx: number): string => {
  return `[data-testid="create-index-fields-name-${idx}"] input`;
};
export const CreateIndexModalFieldTypeSelectButton = (idx: number): string => {
  return `[data-testid="create-index-fields-type-${idx}"] button`;
};
export const CreateIndexModalFieldTypeSelectMenu = (idx: number): string => {
  return `[data-testid="create-index-fields-type-${idx}"] #create-index-fields-type-select-${idx}-menu`;
};

export const CreateIndexErrorMessage = `${CreateIndexModal} [role="alert"]`;
export const CreateIndexCancelButton = `${CreateIndexModal} [role=dialog] > div:nth-child(2) button:first-child`;
export const CreateIndexConfirmButton = `${CreateIndexModal} [role=dialog] > div:nth-child(2) button:last-child`;

export const DropIndexModal = '[data-testid="drop-index-modal"]';
export const DropIndexModalConfirmName =
  '[data-testid="confirm-drop-index-name"]';
export const DropIndexModalConfirmButton =
  '[data-testid="drop-index-modal"] [role=dialog] > div:nth-child(2) button:first-child';

export const DropIndexButton = '[data-testid="index-actions-delete-action"]';

// Validation tab
export const AddRuleButton = '[data-testid="add-rule-button"]';
export const ValidationEditor = '[data-testid="validation-editor"]';
export const ValidationActionMessage =
  '[data-testid="validation-action-message"]';
export const UpdateValidationButton =
  '[data-testid="update-validation-button"]';
export const ValidationMatchingDocumentsPreview =
  '[data-testid="validation-content"] [data-testid="matching-documents"] [data-testid="document-preview"]';
export const ValidationNotMatchingDocumentsPreview =
  '[data-testid="validation-content"] [data-testid="notmatching-documents"] [data-testid="document-preview"]';

// Find (Documents, Schema and Explain Plan tabs)
export const queryBar = (tabName: string): string => {
  const tabSelector = collectionContent(tabName);
  return `${tabSelector} [data-testid="query-bar"]`;
};
export const queryBarOptionInputFilter = (tabName: string): string => {
  const tabSelector = collectionContent(tabName);
  return `${tabSelector} [data-testid="query-bar-option-filter"]`;
};
export const queryBarOptionInputProject = (tabName: string): string => {
  const tabSelector = collectionContent(tabName);
  return `${tabSelector} [data-testid="query-bar-option-project"]`;
};
export const queryBarOptionInputSort = (tabName: string): string => {
  const tabSelector = collectionContent(tabName);
  return `${tabSelector} [data-testid="query-bar-option-sort"]`;
};
export const queryBarOptionInputCollation = (tabName: string): string => {
  const tabSelector = collectionContent(tabName);
  return `${tabSelector} [data-testid="query-bar-option-collation"]`;
};
export const queryBarOptionInputMaxTimeMS = (tabName: string): string => {
  const tabSelector = collectionContent(tabName);
  return `${tabSelector} [data-testid="query-bar-option-maxTimeMS"]`;
};
export const queryBarOptionInputSkip = (tabName: string): string => {
  const tabSelector = collectionContent(tabName);
  return `${tabSelector} [data-testid="query-bar-option-skip"]`;
};
export const queryBarOptionInputLimit = (tabName: string): string => {
  const tabSelector = collectionContent(tabName);
  return `${tabSelector} [data-testid="query-bar-option-limit"]`;
};
export const queryBarApplyFilterButton = (tabName: string): string => {
  const tabSelector = collectionContent(tabName);
  return `${tabSelector} [data-testid="query-bar-apply-filter-button"]`;
};
export const queryBarOptionsToggle = (tabName: string): string => {
  const tabSelector = collectionContent(tabName);
  return `${tabSelector} [data-testid="query-bar-options-toggle"]`;
};
export const queryBarResetFilterButton = (tabName: string): string => {
  const tabSelector = collectionContent(tabName);
  return `${tabSelector} [data-testid="query-bar-reset-filter-button"]`;
};
export const queryBarExportToLanguageButton = (tabName: string): string => {
  const tabSelector = collectionContent(tabName);
  return `${tabSelector} [data-testid="query-bar-open-export-to-language-button"]`;
};

// Workspace tabs at the top
export const CloseWorkspaceTab = '[data-testid="close-workspace-tab"]';

// Export modal
export const ExportModal = '[data-testid="export-modal"]';
export const ExportModalQueryText =
  '[data-testid="export-modal"] [data-testid="query-viewer-wrapper"] .ace_text-layer';
export const ExportModalFullCollectionOption =
  '[data-testid="export-modal"] [data-testid="export-full-collection"]';
export const ExportModalSelectFieldsButton =
  '[data-testid="export-modal"] [data-testid="select-fields-button"]';
export const ExportModalSelectOutputButton =
  '[data-testid="export-modal"] [data-testid="select-output-button"]';
export const ExportModalExportButton =
  '[data-testid="export-modal"] [data-testid="export-button"]';
export const ExportModalShowFileButton =
  '[data-testid="export-modal"] [data-testid="show-file-button"]';
export const ExportModalCloseButton =
  '[data-testid="export-modal"] [data-testid="close-button"]';
export const ExportModalFileText = '[data-testid="export-modal"] #export-file';

export const selectExportFileTypeButton = (
  fileType: string,
  selected?: boolean
): string => {
  const selector = `[data-testid="export-modal"] [data-testid="select-file-type-${fileType}"]`;

  if (selected === true) {
    return `${selector}[aria-selected="true"]`;
  }

  if (selected === false) {
    return `${selector}[aria-selected="false"]`;
  }

  return selector;
};

export const exportModalExportField = (fieldName: string): string => {
  return `[data-testid="export-modal"] input[type="checkbox"][name="${fieldName}"]`;
};

// Export to language modal
export const ExportToLanguageModal = '[data-testid="export-to-lang-modal"]';
export const ExportToLanguageLanguageField =
  '[data-testid="select-lang-field"]';
export const ExportToLanguageLanguageListbox =
  '[data-testid="select-lang-field"] [role="listbox"]';
export const ExportToLanguageImportsCheckbox =
  '[data-testid="export-to-lang-checkbox-imports"]';
export const ExportToLanguageDriverCheckbox =
  '[data-testid="export-to-lang-checkbox-driver"]';
export const ExportToLanguageBuildersCheckbox =
  '[data-testid="export-to-lang-checkbox-builders"]';
export const ExportToLanguageCopyOutputButton =
  '[data-testid="export-to-lang-copy-output"]';
export const ExportToLanguageCloseButton =
  '[data-testid="export-to-lang-modal"] .modal-footer .btn-default';
export const ExportToLanguageQueryOutput =
  '[data-testid="export-to-lang-query-output-container"]';

// Confirm new pipeline modal
export const ConfirmNewPipelineModal =
  '[data-testid="confirm_new_pipeline_modal"]';
export const ConfirmNewPipelineModalConfirmButton =
  '[data-testid="confirm_new_pipeline_modal"] [role=dialog] > div:nth-child(2) button:first-child';

// New pipeline from text modal
export const NewPipelineFromTextModal = '[data-testid="import_pipeline_modal"]';
export const NewPipelineFromTextEditor = '#import-pipeline-editor';
export const NewPipelineFromTextConfirmButton =
  '[data-testid="import_pipeline_modal"] [role=dialog] > div:nth-child(2) button:first-child';

// Confirm import pipeline modal
export const ConfirmImportPipelineModal =
  '[data-testid="confirm_import_pipeline_modal"]';
export const ConfirmImportPipelineModalConfirmButton =
  '[data-testid="confirm_import_pipeline_modal"] [role=dialog] > div:nth-child(2) button:first-child';
