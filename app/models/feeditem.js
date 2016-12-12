import DS from 'ember-data';
import attr from 'ember-data/attr';

export default DS.Model.extend({

    /** @type {String} */
  title: attr('string'),

  /** @type {String} */
  description: attr('string'),

  /** @type {String} */
  link: attr('string'),

  /** @type {String} */
  source: attr('string'),

  /** @type {String} */
  channel: attr('string'),

  /** @type {String} */
  tags: attr(),

  /** @type {String} */
  date: attr('string')
});
