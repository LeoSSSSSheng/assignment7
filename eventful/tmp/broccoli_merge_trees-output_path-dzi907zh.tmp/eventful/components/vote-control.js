define("eventful/components/vote-control", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    // $(".upVote").onclick(){
    //   let score = this.get("score");
    //   score++;
    //   this.get("onvote")(score);
    // }
    //alwaus delegate the function up to the data source.
    upClicked: false,
    downClicked: false,
    actions: {
      upVote: function upVote() {
        if (!this.get("upClicked")) {
          var score = this.get("score");
          score++;
          this.get("onvote")(score);
          this.set("upClicked", true);
          this.set("downClicked", false);

          // this.upClicked = true;
        }
      },
      downVote: function downVote() {
        if (!this.get("downClicked")) {
          var score = this.get("score");
          score--;
          this.get("onvote")(score);
          this.set("downClicked", true);
          this.set("upClicked", false);
        }
      }
    }
  });
});