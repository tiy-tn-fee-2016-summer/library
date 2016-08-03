import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  year: DS.attr('number'),
  isDigital: DS.attr('boolean'),
  author: DS.belongsTo('author'),
});
