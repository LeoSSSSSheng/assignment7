import Ember from 'ember';

export default Ember.Component.extend({
  // $(".upVote").onclick(){
  //   let score = this.get("score");
  //   score++;
  //   this.get("onvote")(score);
  // }
  //alwaus delegate the function up to the data source.
  upClicked: false,
  downClicked: false,
  actions: {
    upVote(){
      if(!this.get("upClicked")){
        let score = this.get("score");
        if(this.get("downClicked") == false){
          score++;
        }
        else{
          score += 2;
        }
        this.get("onvote")(score);
        this.set("upClicked", true);
        this.set("downClicked", false);
        // this.upClicked = true;
      }
    },
    downVote(){
      if(!this.get("downClicked")){
        let score = this.get("score");
        if(this.upClicked == false){
          score--;
        }
        else{
          score -= 2;
        }
        this.get("onvote")(score);
        this.set("downClicked", true);
        this.set("upClicked", false);

      }
    }
  }
});
