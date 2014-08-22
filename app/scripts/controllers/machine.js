'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MachineCtrl
 * @description
 * # MachineCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('MachineCtrl', function ($scope, Machine) {
	$scope.nodes = [];

	$scope.list = function () {
	    Machine.list().then(function(nodes) {
	    	$scope.nodes = nodes;
	    });
	};
	$scope.list();

	$scope.remove = function(node) {
		Machine.remove(node);
	};
  });
