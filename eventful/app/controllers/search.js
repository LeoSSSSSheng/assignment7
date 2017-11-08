import Ember from 'ember';

export default Ember.Controller.extend({
  email:{
    title:"Sign up for Spring classes!",
    read: false
  },
  sortedEvents: Ember.computed('model', function(){
    let events = this.get('model').data.children; //reddis list is data.children
    let sortedEvents = events.sort(function(eventA, eventB){
      let scoreA = eventA.data.score;
      let scoreB = eventB.data.score;
      if(scoreA > scoreB){
        return -1;
      }
      else if(scoreA < scoreB){
        return 1;
      }
      return 0;
    });
    return sortedEvents;
  })
});
