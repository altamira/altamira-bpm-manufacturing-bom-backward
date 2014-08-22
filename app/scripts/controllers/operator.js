'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:OperatorCtrl
 * @description
 * # OperatorCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('EmployeeCtrl', function ($scope, Employee) {
	$scope.nodes = [];

	$scope.list = function () {
	    Employee.list().then(function(nodes) {
	    	$scope.nodes = nodes;
	    });
	};
	$scope.list();

	$scope.remove = function(node) {
		Employee.remove(node);
	};
  });
