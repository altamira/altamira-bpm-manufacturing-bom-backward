'use strict';

/**
 * @ngdoc service
 * @name appApp.edges
 * @description
 * # edges
 * Service in the appApp.
 */
angular.module('appApp')
  .service('Edges', function Edges() {
    // AngularJS will instantiate a singleton by calling "new" on this function
  })
  .factory('Edges', function (Gremlin) {
	var gremlin = Gremlin;

	var getProperty = function(key, value) {
		return "\"" + key + "\":\"" + value + "\"";
	}

	// Public API...
	return {
	  create : function(vertex) {
	    return gremlin.run({script: "g.addVertex(null, [" + JSON.stringify(vertex, getProperty + "]")});
	  },
	  save : function(script) {
	    return gremlin.run(script);
	  },
	  remove: function () {
	    return gremlin.run({"script": "g.E"});
	  },
	  list: function () {
	    return gremlin.run({"script": "g.E"});
	  }
	};
  });
