import DS from 'ember-data';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default DS.Model.extend({

  /** @type {String} */
  username: attr('string'),

  /** @type {String} */
  email: attr('string'),

  /** @type {module:bm/models/channel} */
  channels: hasMany('channel', { embedded: 'always', async: true }),
});
