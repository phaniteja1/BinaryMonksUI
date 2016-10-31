import Ember from 'ember';

const { inject: { service }} = Ember;

export default Ember.Controller.extend({

    uiState: service(),

    channelsList: Ember.computed('uiState.input', {
        get() {
            switch(this.get('uiState.input')) {
                case '$channels': return this.channels;
                case '$mychannels': return this.mychannels;
                case '$topchannels': return this.channels;
                default: return this.channels; 
            }
        }
    }),
});
