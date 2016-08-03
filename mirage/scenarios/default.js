import { faker } from 'ember-cli-mirage';

export default function(server) {
  server.createList('author', 200);
  server.createList('book', 4, {authorId: 1});
  server.createList('book', 150, {
    authorId() {
      return faker.random.number({min: 1, max: 200});
    },
  });

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.

    Make sure to define a factory for each model you want to create.
  */

  // server.createList('post', 10);
}
