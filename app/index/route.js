import Ember from 'ember';

const { inject: { service } } = Ember;

export default Ember.Route.extend({

  uiState: service(),

  model() {
    return this.store.findAll('feeditem');
  },

  setupController: function(controller, model) {
    controller.set('feeds', model);
    controller.set('search', '');
  },

  inputContainsChannels(input) {
    return (input.toLowerCase().indexOf('channel') > -1);
  },

  inputContainsHelp(input) {
    return (input.indexOf('help') > -1);
  },

  inputContainsFeed(input) {
    return (input.trim() === '');
  },
 
  actions: {

    processInput() {
      let input = this.controller.get('search');
      this.set('uiState.input', input);

      switch(true) {
        case this.inputContainsHelp(input): this.transitionTo('index.help'); break;
        case this.inputContainsChannels(input): this.transitionTo('index.channels'); break;
        case this.inputContainsFeed(input): this.transitionTo('index.feed'); break;
        default: this.transitionTo('index.help'); break;
      }
    }
  }
});
