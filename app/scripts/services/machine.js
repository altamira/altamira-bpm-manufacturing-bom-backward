'use strict';

/**
 * @ngdoc service
 * @name appApp.machine
 * @description
 * # machine
 * Service in the appApp.
 */
angular.module('appApp')
  .service('Machine', function Machine() {
    // AngularJS will instantiate a singleton by calling "new" on this function
  })
  .factory('Machine', function ($http,  Gremlin) {
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
	    return Gremlin.run({"script": "g.V.has('tipo', 'maquina')"});
	  }
	};
  });
