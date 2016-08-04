import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submitBook(author, formValues) {
      const book = this.store.createRecord('book', formValues);
      book.set('author', author);

      book.save().then(() => {
        this.transitionToRoute('author.detail.index');
      });
    },
  },
});
