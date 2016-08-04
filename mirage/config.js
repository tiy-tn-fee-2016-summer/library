export default function () {
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */

  // Tell our fake API to respond to different URLs
  this.get('/authors');
  this.post('/authors');
  this.get('/authors/:id');
  this.put('/authors/:id');
  this.patch('/authors/:id');
  this.del('/authors/:id');

  this.get('/books');
  this.post('/books');
  this.get('/books/:id');
  this.put('/books/:id');
  this.patch('/books/:id');
  this.del('/books/:id');
}
