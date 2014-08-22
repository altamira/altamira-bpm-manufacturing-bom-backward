'use strict';

/**
 * @ngdoc service
 * @name appApp.operator
 * @description
 * # operator
 * Service in the appApp.
 */
angular.module('appApp')
  .service('Employee', function Employee() {
    // AngularJS will instantiate a singleton by calling "new" on this function
  })  
  .factory('Employee', function ($http,  Gremlin) {
  	var gremlin = Gremlin;

	var getProperty = function(key, value) {
		return "\"" + key + "\":\"" + value + "\"";
	}

	// Public API...
	return {
	  create : function(node) {
	    return gremlin.run(node);
	  },
	  save: function (node) {
	    return gremlin.run(node);
	  },
	  remove: function (node) {
	    return $http({method: 'DELETE', url: node.self})
	  },
	  list: function () {
	    return Gremlin.run({"script": "g.V.has('tipo', 'pessoa')"});
	  }
	};
  });
