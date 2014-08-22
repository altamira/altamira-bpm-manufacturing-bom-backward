'use strict';

/**
 * @ngdoc service
 * @name appApp.vertex
 * @description
 * # vertex
 * Service in the appApp.
 */
angular.module('appApp')
  .service('Vertex', function Vertex() {
    // AngularJS will instantiate a singleton by calling "new" on this function
  })
  .factory('Vertex', function (Gremlin) {
	var gremlin = Gremlin;

	var getProperty = function(key, value) {
		return "\"" + key + "\":\"" + value + "\"";
	}

	// Public API...
	return {
	  create : function(node) {
	    return gremlin.run({script: "g.addVertex(null, [" + JSON.stringify(node, getProperty + "]")});
	  },
	  save : function(node) {
	    return gremlin.run(script);
	  },
	  remove: function (node) {
	    return gremlin.run({"script": "g.removeVertex(g.v(" + node.id + "))"});
	  },
	  list: function () {
	    return gremlin.run({"script": "g.V"});
	  }
	};
  });