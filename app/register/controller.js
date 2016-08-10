import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    registerUser(formValues) {
      const newUser = this.store.createRecord('user', formValues);

      newUser.save().then(() => {
        this.transitionToRoute('login');
      });
    },
  },
});
