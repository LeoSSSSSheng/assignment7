import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    markAsRead(){
      console.log("called");
      this.set('email.read', true);
    }
  }
});
