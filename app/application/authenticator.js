import JWTAuthenticator from 'ember-simple-auth-token/authenticators/jwt';

export default JWTAuthenticator.extend({
  getAuthenticateData(credentials) {
    const authentication = {
      grant_type: 'password',
      [this.passwordField]: credentials.password,
      [this.identificationField]: credentials.identification,
    };

    return authentication;
  },
});
