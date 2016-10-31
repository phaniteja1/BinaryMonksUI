import Ember from 'ember';

const { RSVP } = Ember;

export default Ember.Route.extend({

  model() {
    return RSVP.hash({
          feeds: this.store.findAll('feeditem'),
          user: this.store.findRecord('user', '581697ccdcba0f01c12e78aa')
        });
  },

  setupController: function(controller, model) {
    controller.set('feeds', model.feeds);
    this.set('feeds', model.feeds);
    this.set('user', model.user);
    controller.set('myfeed', this.filterFeeds());
  },

  filterFeeds() {
    let myfeed = [];

    this.get('user.channels').forEach((channel) => {
      myfeed.pushObjects(this.get('feeds').filterBy('source', channel.get('source')));
    });

    return myfeed;
  }
});
