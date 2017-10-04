const Reflux = require('reflux');
const StateMixin = require('reflux-state-mixin');
const electronApp = require('electron').remote.app;
const { UI_STATES } = require('../constants');

const debug = require('debug')('mongodb-compass:stores:home');

const HomeStore = Reflux.createStore({

  mixins: [StateMixin.store],

  onActivated(appRegistry) {
    // set up listeners on external stores
    appRegistry.getStore('App.InstanceStore').listen(this.onInstanceChange.bind(this));
    appRegistry.on('data-service-connected', this.onConnected.bind(this, appRegistry));
    appRegistry.on('collection-changed', this.onCollectionChanged.bind(this));
    appRegistry.on('database-changed', this.onDatabaseChanged.bind(this));
  },

  onCollectionChanged(namespace) {
    this.onNamespaceChange(namespace);
  },

  onDatabaseChanged(namespace) {
    this.onNamespaceChange(namespace);
  },

  getInitialState() {
    return {
      errorMessage: '',
      namespace: '',
      uiStatus: UI_STATES.INITIAL
    };
  },

  onConnected(appRegistry, err, ds) {
    this.instanceId = ds.client.model.instance_id;
    const StatusAction = appRegistry.getAction('Status.Actions');
    StatusAction.configure({
      animation: true,
      message: 'Loading navigation',
      visible: true
    });

    this.setState({
      uiStatus: UI_STATES.LOADING
    });
  },

  onInstanceChange(state) {
    if (state.errorMessage) {
      this.setState({
        errorMessage: state.errorMessage,
        uiStatus: UI_STATES.ERROR
      });
      return;
    }
    this.setState({
      uiStatus: UI_STATES.COMPLETE
    });
    this.updateTitle();
  },

  /**
   * change content based on namespace
   * @param {object} namespace - current namespace context
   */
  onNamespaceChange(namespace) {
    this.setState({namespace: namespace});
    this.updateTitle(namespace);
  },

  updateTitle: function(namespace) {
    let title = `${electronApp.getName()} - ${this.instanceId}`;
    if (namespace) {
      title += '/' + namespace;
    }
    document.title = title;
  },

  /**
  * log changes to the store as debug messages.
  * @param  {Object} prevState   previous state.
  */
  storeDidUpdate(prevState) {
    debug('Home store changed from', prevState, 'to', this.state);
  }
});

module.exports = HomeStore;
