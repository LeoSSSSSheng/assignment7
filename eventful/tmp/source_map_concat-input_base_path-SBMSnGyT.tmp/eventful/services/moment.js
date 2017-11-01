define('eventful/services/moment', ['exports', 'eventful/config/environment', 'ember-moment/services/moment'], function (exports, _environment, _moment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _moment.default.extend({
    defaultFormat: Ember.get(_environment.default, 'moment.outputFormat')
  });
});