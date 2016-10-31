import Ember from 'ember';

export default Ember.Component.extend({

    isMyChannel: Ember.computed('mychannels.length', {
        get() {
            return this.get('mychannels').includes(this.get('channel'));
        }
    }),

    actions: {

        addChannel(channel) {
            this.sendAction('addChannel', channel);
        },

        removeChannel(channel) {
            this.sendAction('removeChannel', channel);
        }
    }
});
