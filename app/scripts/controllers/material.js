'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MaterialCtrl
 * @description
 * # MaterialCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('MaterialCtrl', function ($scope, $location, Material, node) {
	$scope.node = node;

	$scope.save = function(node) {
		if (node.self === undefined) {
			Material.create(node).then(function() {
				$location.path('/material');
			});
		} else {
			Material.save(node).then(function() {
				$location.path('/material');
			});
		}
	}

	$scope.list = function () {
	    Material.list().then(function(nodes) {
	    	$scope.nodes = nodes;
	    });
	};
	$scope.list();

	$scope.remove = function(id) {
		Material.remove(id);
	};

  });
