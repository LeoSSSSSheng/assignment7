import Ember from 'ember';
import moment from 'moment';

export function relativeTime(params/*, hash*/) {
  let date = params[0];
  return moment(date * 1000).fromNow();
  return params;
}

export default Ember.Helper.helper(relativeTime);
