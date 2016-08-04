import { test } from 'qunit';
import moduleForAcceptance from 'library/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | books');

test('user can see details for an author', (assert) => {
  server.create('author');
  visit('/authors/1/books');

  andThen(() => {
    assert.equal(currentRouteName(), 'author.detail');

    const author = server.db.authors.find(1);
    assert.equal(findWithAssert('.author-name').text().trim(),
      `${author.firstName} ${author.lastName}`);
  });
});

test('user can navigate back to all authors page', (assert) => {
  server.create('author');
  visit('/authors/1/books');
  click('.back');

  andThen(() => {
    assert.equal(currentURL(), '/authors');
  });
});
