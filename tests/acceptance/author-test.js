import { test } from 'qunit';
import moduleForAcceptance from 'library/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | author');

test('visiting /authors shows the author route and a title', (assert) => {
  visit('/authors');

  andThen(() => {
    assert.equal(currentRouteName(), 'author.index');
    assert.equal(findWithAssert('.page-title').text().trim(), 'Authors');
  });
});

test('visiting /authors shows a list of authors', (assert) => {
  // Create 5 fake authors in our API
  server.createList('author', 5);
  visit('/authors');

  andThen(() => {
    findWithAssert('.author-list');
    assert.equal(findWithAssert('.author-list__item').length, 5,
      'There should be an element for each author from the API');

    const firstAuthorEl = findWithAssert('.author-name:first');
    const firstAuthor = server.db.authors.find(1);
    assert.equal(firstAuthorEl.text().trim(), `${firstAuthor.firstName} ${firstAuthor.lastName}`,
      'The first author should be filled in');
  });
});

test('user can see a link to books for each author in /authors', (assert) => {
  // "server" is mirage in our tests
  server.createList('author', 3);
  server.create('book', {
    authorId: 1,
  });

  visit('/authors');
  click('.author-link');

  andThen(() => {
    assert.equal(currentURL(), '/authors/1/books');
    const book = server.db.books.find(1);

    findWithAssert(`:contains(${book.title})`);
  });
});

test('user can delete an existing author', (assert) => {
  server.createList('author', 4);
  visit('/authors');
  click('.delete[data-id=2]');

  andThen(() => {
    assert.equal(find('.author-list__item').length, 3,
      'The deleted item should not show in the list');
    assert.equal(server.db.authors.find(2), null,
      'The deleted author should be removed from the API');
  });
});

test('user can navigate from main list to new author form', (assert) => {
  visit('/authors');
  click('.new-link');

  andThen(() => {
    assert.equal(currentURL(), '/authors/new');
    assert.equal(findWithAssert('.page-title').text().trim(), 'New Author');
  });
});

test('user can submit a new author', (assert) => {
  // Visit the page
  visit('/authors/new');

  // Fill in the form
  fillIn('.input-first-name', 'Steven');
  fillIn('.input-last-name', 'King');

  // Submit the form
  click('.submit');

  // Wait for ^ to finish
  andThen(() => {
    assert.equal(currentURL(), '/authors');

    const firstAuthor = server.db.authors.find(1);
    assert.equal(firstAuthor.firstName, 'Steven');
    assert.equal(firstAuthor.lastName, 'King');

    const firstAuthorEl = findWithAssert('.author-name:first');
    assert.equal(firstAuthorEl.text().trim(), 'Steven King',
      'The first author should be filled in');
  });
});
