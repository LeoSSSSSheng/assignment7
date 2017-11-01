define('eventful/helpers/relative-time', ['exports', 'moment'], function (exports, _moment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.relativeTime = relativeTime;
  function relativeTime(params /*, hash*/) {
    var date = params[0];
    return (0, _moment.default)(date * 1000).fromNow();
    return params;
  }

  exports.default = Ember.Helper.helper(relativeTime);
});