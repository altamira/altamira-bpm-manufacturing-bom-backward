'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:ProcessCtrl
 * @description
 * # ProcessCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('ProcessCtrl', function ($scope, Process) {
	$scope.nodes = [];

	$scope.list = function () {
	    Process.list().then(function(nodes) {
	    	$scope.nodes = nodes;
	    });
	};
	$scope.list();

	$scope.remove = function(node) {
		Process.remove(node);
	};
  });
