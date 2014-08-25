'use strict';

/**
 * @ngdoc overview
 * @name appApp
 * @description
 * # appApp
 *
 * Main module of the application.
 */
angular
  .module('appApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'restangular'
  ])
  .config(['$routeProvider', '$httpProvider', 'RestangularProvider', function ($routeProvider, $httpProvider, RestangularProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/material', {
        templateUrl: 'views/material.html',
        controller: 'MaterialCtrl',
        resolve: {
          node: function() {
            return { 'data': { 'tipo' : 'materia_prima', 'nome': 'Materia prima...', 'peso': '? quilograma', 'espessura': '1.85 milimetros'}};
          }
        }
      })
      .when('/material/:id', {
        templateUrl: 'views/material.html',
        controller: 'MaterialCtrl',
        resolve: {
          node: ['Restangular', '$route', function (Restangular, $route) {
            return Restangular.one('node', $route.current.params.id).get();
          }]}
      })
      .when('/product', {
        templateUrl: 'views/product.html',
        controller: 'ProductCtrl'
      })
      .when('/process', {
        templateUrl: 'views/process.html',
        controller: 'ProcessCtrl'
      })
      .when('/operator', {
        templateUrl: 'views/operator.html',
        controller: 'OperatorCtrl'
      })
      .when('/employee', {
        templateUrl: 'views/employee.html',
        controller: 'EmployeeCtrl'
      })
      .when('/machine', {
        templateUrl: 'views/machine.html',
        controller: 'MachineCtrl'
      })
      .when('/tools', {
        templateUrl: 'views/tools.html',
        controller: 'ToolsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });


      RestangularProvider.setBaseUrl('http://localhost:7474/db/data/');
  }]);
