import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    changeScore(newScore){
      let post = this.get("post");
      this.set("post.data.score", newScore);
    }
  }
});
