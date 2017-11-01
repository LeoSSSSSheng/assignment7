define('eventful/services/reddit', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var $ = Ember.$;
  exports.default = Ember.Service.extend({
    findAllForSubreddit: function findAllForSubreddit(params) {
      var url = 'https://www.reddit.com/r/' + params.keywords + '.json';
      return $.getJSON(url);
    }
  });
});