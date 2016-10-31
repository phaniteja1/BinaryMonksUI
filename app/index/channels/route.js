import Ember from 'ember';

const { inject: { service }, RSVP } = Ember;

export default Ember.Route.extend({

    uiState: service(),

    model() {
        return RSVP.hash({
          channels: this.store.findAll('channel'),
          user: this.store.findRecord('user', '581697ccdcba0f01c12e78aa')
        });
    },

    setupController(controller, model) {
        controller.set('channels', model.channels);
        controller.set('mychannels', model.user.get('channels'));
        this.set('user', model.user);
    },

    actions: {

        addChannel(channel) {
            this.get('user.channels').pushObject(channel);
            this.get('user').save();
        },

        removeChannel(channel) {
            this.get('user.channels').removeObject(channel);
            this.get('user').save();
        }
    }

});
