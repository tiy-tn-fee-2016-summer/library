import DS from 'ember-data';
import config from 'library/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: config.DS.host,
  namespace: config.DS.namespace,

  urlForCreateRecord(modelName) {
    if (modelName === 'user') {
      return this._super(...arguments).replace('users', 'register');
    }

    return this._super(...arguments);
  },
});
