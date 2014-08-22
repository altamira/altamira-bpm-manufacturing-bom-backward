'use strict';

/**
 * @ngdoc service
 * @name appApp.product
 * @description
 * # product
 * Service in the appApp.
 */
angular.module('appApp')
.service('Gremlin', function Gremlin() {
// AngularJS will instantiate a singleton by calling "new" on this function
})
.factory('Gremlin', function (Restangular) {
	var gremlin = Restangular.all('ext/GremlinPlugin/graphdb/execute_script');

	var getProperty = function(key, value) {
		return "\"" + key + "\":\"" + value + "\"";
	}

	// Public API...
	return {
	  run : function(script) {
	    return gremlin.customPOST(script);
	  },
	  vertexes: function () {
	    return gremlin.customPOST({"script": "g.V"});
	  },
	  edges: function () {
	    return gremlin.customPOST({"script": "g.E"});
	  }
	};
});