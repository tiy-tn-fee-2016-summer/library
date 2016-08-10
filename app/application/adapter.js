import DS from 'ember-data';
import config from 'library/config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:token',
  host: config.DS.host,
  namespace: config.DS.namespace,

  urlForCreateRecord(modelName) {
    if (modelName === 'user') {
      return this._super(...arguments).replace('users', 'register');
    }

    return this._super(...arguments);
  },
});
