import { test } from 'qunit';
import moduleForAcceptance from 'library/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | author');

test('visiting /authors shows the author route and a title', function(assert) {
  visit('/authors');

  andThen(function() {
    assert.equal(currentRouteName(), 'author');
    assert.equal(findWithAssert('.page-title').text().trim(), 'Authors');
  });
});
