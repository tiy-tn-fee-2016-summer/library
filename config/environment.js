/* jshint node: true */

module.exports = function (environment) {
  var ENV = {
    DS: {
      host: 'https://tiy-tn-library-api.herokuapp.com',
      namespace: 'api',
    },

    modulePrefix: 'library',
    environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
  };

  ENV['ember-simple-auth-token'] = {
    serverTokenEndpoint: `${ENV.DS.host}/${ENV.DS.namespace}/token-auth`,
    tokenPropertyName: 'access_token',
  };

  if (environment === 'development') {
    ENV['ember-cli-mirage'] = {
      enabled: false,
    };
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
