'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MaterialCtrl
 * @description
 * # MaterialCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('MaterialCtrl', function ($scope, Material) {
	$scope.nodes = [];

	$scope.list = function () {
	    Material.list().then(function(nodes) {
	    	$scope.nodes = nodes;
	    });
	};
	$scope.list();

	$scope.remove = function(node) {
		Material.remove(node);
	};
  });
