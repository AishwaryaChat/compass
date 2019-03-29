var Connection = require('./model');
var storageMixin = require('storage-mixin');
var uuid = require('uuid');
var electron = require('electron');
var electronApp = electron.remote ? electron.remote.app : undefined;

/**
 * Configuration for connecting to a MongoDB Deployment.
 */
module.exports = Connection.extend(storageMixin, {
  idAttribute: '_id',
  namespace: 'Connections',
  storage: {
    backend: 'splice',
    appName: electronApp ? electronApp.getName() : undefined,
    secureCondition: function(val, key) {
      return key.match(/(password|passphrase)/i);
    }
  },
  props: {
    _id: {
      type: 'string',
      default: function() {
        return uuid.v4();
      }
    },
    /**
     * Updated on each successful connection to the Deployment.
     */
    last_used: {
      type: 'date',
      default: null
    },
    is_favorite: {
      type: 'boolean',
      default: false
    }
  },
  session: {
    selected: {
      type: 'boolean',
      default: false
    }
    // active: {
    //   type: 'boolean',
    //   default: false
    // }
  },
  derived: {
    // canonical username independent of authentication method
    username: {
      deps: ['authentication'],
      fn: function() {
        if (this.authentication === 'NONE') {
          return '';
        }
        if (this.authentication === 'MONGODB') {
          return this.mongodb_username;
        }
        if (this.authentication === 'KERBEROS') {
          return this.kerberos_principal;
        }
        if (this.authentication === 'X509') {
          return this.x509_username;
        }
        if (this.authentication === 'LDAP') {
          return this.ldap_username;
        }
      }
    }
  },
  serialize: function() {
    return Connection.prototype.serialize.call(this, {
      all: true
    });
  }
});
