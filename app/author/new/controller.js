import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveAuthor(formValues) {
      // Look up what's in the form?
      // Create and Save an Author
      this.store.createRecord('author', formValues)
        .save().then(() => {

        // Redirect
        this.transitionToRoute('author.index');
      });

    },
  },
});
