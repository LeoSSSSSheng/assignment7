define('eventful/helpers/is-between', ['exports', 'eventful/config/environment', 'ember-moment/helpers/is-between'], function (exports, _environment, _isBetween) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _isBetween.default.extend({
    globalAllowEmpty: !!Ember.get(_environment.default, 'moment.allowEmpty')
  });
});