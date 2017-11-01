define('eventful/controllers/application', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Controller.extend({
		actions: {
			searchForReddit: function searchForReddit() {
				event.preventDefault(); // this line is a must for using form for onsubmit
				var keywords = this.get('keywords');
				this.transitionToRoute('search', keywords);
			}
		}
	});
});