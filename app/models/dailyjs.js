import DS from 'ember-data';
import attr from 'ember-data/attr';

export default DS.Model.extend({

    /** @type {String} */
  title: attr('string'),

  /** @type {String} */
  description: attr('string'),
});
