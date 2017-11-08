define('eventful/components/unread-email', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    actions: {
      markAsRead: function markAsRead() {
        console.log("called");
        this.set('email.read', true);
      }
    }
  });
});