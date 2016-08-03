import { test } from 'qunit';
import moduleForAcceptance from 'library/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | books');

test('visiting /books', function(assert) {
  visit('/books');

  andThen(function() {
    assert.equal(currentURL(), '/books');
  });
});
