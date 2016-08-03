// mirage/models/author.js
import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  works: hasMany('book'),
});
