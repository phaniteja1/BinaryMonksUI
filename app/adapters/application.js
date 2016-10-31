import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({

	host: 'https://binarymonks.herokuapp.com',
    primaryKey: '_id'

});
