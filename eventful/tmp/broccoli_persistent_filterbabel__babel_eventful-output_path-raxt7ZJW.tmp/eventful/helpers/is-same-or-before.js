define('eventful/helpers/is-same-or-before', ['exports', 'eventful/config/environment', 'ember-moment/helpers/is-same-or-before'], function (exports, _environment, _isSameOrBefore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _isSameOrBefore.default.extend({
    globalAllowEmpty: !!Ember.get(_environment.default, 'moment.allowEmpty')
  });
});