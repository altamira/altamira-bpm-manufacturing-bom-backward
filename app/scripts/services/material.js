'use strict';

/**
 * @ngdoc service
 * @name appApp.material
 * @description
 * # material
 * Service in the appApp.
 */
angular.module('appApp')
  .service('Material', function Material() {
    // AngularJS will instantiate a singleton by calling "new" on this function
  })
  .factory('Material', function ($http,  Gremlin, Restangular) {
  	var gremlin = Gremlin;
  	var node = Restangular.all('node');

	var getProperty = function(key, value) {
		return "\"" + key + "\":\"" + value + "\"";
	}

	// Public API...
	return {
	  create : function(material) {
	    return node.customPOST(material.data);
	  },
	  save: function (material) {
	    return node.customPOST(material.data, material.self.substring(material.self.lastIndexOf('/') + 1));
	  },
	  remove: function (id) {
	    return node.delete(id);
	  },
	  list: function () {
	    return Gremlin.run({"script": "g.V.has('tipo', 'materia_prima')"});
	  }
	};
  });
