import DS from 'ember-data';
import attr from 'ember-data/attr';

export default DS.Model.extend({

  /** @type {String} */
  source: attr('string'),

  /** @type {String} */
  channel: attr('string')
});
