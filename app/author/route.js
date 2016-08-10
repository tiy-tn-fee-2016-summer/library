import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  beforeModel() {
    // Check that user is authenticated!
    if (!this.get('session.isAuthenticated')) {
      alert('You have to be logged in!');

      this.transitionTo('login');
    }
  },
});
