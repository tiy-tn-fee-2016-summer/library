import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('author', { path: '/authors' }, function() {
    this.route('new');
    this.route('detail', { path: '/:id/books' }, function() {
      this.route('add-book', { path: '/add' });
    });
  });
  this.route('books');
});

export default Router;
