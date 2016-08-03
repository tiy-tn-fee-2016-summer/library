import { test } from 'qunit';
import moduleForAcceptance from 'library/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | books');

test('user can see details for an author', function(assert) {
  server.create('author')
  visit('/authors/1/books');

  andThen(function() {
    assert.equal(currentRouteName(), 'author.detail');

    const author = server.db.authors.find(1);
    assert.equal(findWithAssert('.author-name').text().trim(),
      `${author.firstName} ${author.lastName}`);
  });
});

test('user can navigate back to all authors page', function (assert) {
  server.create('author')
  visit('/authors/1/books');
  click('.back');

  andThen(function() {
    assert.equal(currentURL(), '/authors');
  });
});
