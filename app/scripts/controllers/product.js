'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('ProductCtrl', function ($scope, Product) {
	$scope.nodes = [];

	$scope.list = function () {
	    Product.list().then(function(nodes) {
	    	$scope.nodes = nodes;
	    });
	};
	$scope.list();

	$scope.remove = function(node) {
		Product.remove(node);
	};
  });
