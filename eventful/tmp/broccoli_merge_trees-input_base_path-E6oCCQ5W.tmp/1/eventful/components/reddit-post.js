define("eventful/components/reddit-post", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    actions: {
      changeScore: function changeScore(newScore) {
        var post = this.get("post");
        this.set("post.data.score", newScore);
      }
    }
  });
});