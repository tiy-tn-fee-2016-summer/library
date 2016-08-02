import { test } from 'qunit';
import moduleForAcceptance from 'library/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | author');

test('visiting /authors shows the author route and a title', function(assert) {
  visit('/authors');

  andThen(function() {
    assert.equal(currentRouteName(), 'author.index');
    assert.equal(findWithAssert('.page-title').text().trim(), 'Authors');
  });
});

test('visiting /authors shows a list of authors', function(assert) {
  // Create 5 fake authors in our API
  server.createList('author', 5);
  visit('/authors');

  andThen(function() {
    findWithAssert('.author-list');
    assert.equal(findWithAssert('.author-list__item').length, 5,
      'There should be an element for each author from the API');

    const firstAuthorEl = findWithAssert('.author-list__item:first');
    const firstAuthor = server.db.authors.find(1);
    assert.equal(firstAuthorEl.text().trim(), `${firstAuthor.firstName} ${firstAuthor.lastName}`,
      'The first author should be filled in');
  });
});

test('user can navigate from main list to new author form', function(assert) {
  visit('/authors');
  click('.new-link');

  andThen(function() {
    assert.equal(currentURL(), '/authors/new');
    assert.equal(findWithAssert('.page-title').text().trim(), 'New Author');
  });
});
