define('eventful/helpers/moment-add', ['exports', 'eventful/config/environment', 'ember-moment/helpers/moment-add'], function (exports, _environment, _momentAdd) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _momentAdd.default.extend({
    globalAllowEmpty: !!Ember.get(_environment.default, 'moment.allowEmpty')
  });
});