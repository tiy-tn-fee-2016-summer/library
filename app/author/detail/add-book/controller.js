import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submitBook(formValues) {
      this.transitionToRoute('author.detail.index');
    },
  },
});
