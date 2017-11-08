define('eventful/controllers/search', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    email: {
      title: "Sign up for Spring classes!",
      read: false
    },
    sortedEvents: Ember.computed('model', function () {
      var events = this.get('model').data.children; //reddis list is data.children
      var sortedEvents = events.sort(function (eventA, eventB) {
        var scoreA = eventA.data.score;
        var scoreB = eventB.data.score;
        if (scoreA > scoreB) {
          return -1;
        } else if (scoreA < scoreB) {
          return 1;
        }
        return 0;
      });
      return sortedEvents;
    })
  });
});