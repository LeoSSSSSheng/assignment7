define('eventful/routes/search', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var $ = Ember.$;


	var inject = Ember.inject;

	exports.default = Ember.Route.extend({
		//this is how we inject the Service
		//after this now the reddit service is inside
		//current this object
		//to retrieve it must use this.get('reddit')
		//then to use the service must call the service method
		//parameters are same of the model parameter
		reddit: inject.service(),
		model: function model(params) {
			// console.log(params.keywords);
			//service return a -->promise<--
			var obj = this.get('reddit').findAllForSubreddit(params);

			obj.then(function (res) {
				console.log(res.data.children);
			});

			//in the hbs file model is already obj.res not obj

			return obj;
		}
	});
});