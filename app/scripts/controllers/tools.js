'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:ToolsCtrl
 * @description
 * # ToolsCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('ToolsCtrl', function ($scope, Tools) {
	$scope.nodes = [];

	$scope.list = function () {
	    Tools.list().then(function(nodes) {
	    	$scope.nodes = nodes;
	    });
	};
	$scope.list();

	$scope.remove = function(node) {
		Tools.remove(node);
	};
  });
