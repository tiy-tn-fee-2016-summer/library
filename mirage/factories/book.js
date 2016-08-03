import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  authorId: 1,

  title() {
    return faker.company.bsBuzz();
  },

  year() {
    return faker.date.past(20).getFullYear();
  },

  isDigital() {
    return faker.random.boolean();
  }
});
