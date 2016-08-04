import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    destroy(author) {
      author.destroyRecord();
    },
  },
});
