'use strict';

/**
 * @ngdoc overview
 * @name scratchApp
 * @description
 * # scratchApp
 *
 * Main module of the application.
 */
angular
  .module('scratchApp', [
    'ngRoute',
    'AdalAngular'
  ])
  .config([
    '$routeProvider',
    '$httpProvider',
    'adalAuthenticationServiceProvider',
    '$locationProvider',
    function($routeProvider, $httpProvider, adalAuthenticationServiceProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      adalAuthenticationServiceProvider.init({
          tenant: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
          clientId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
        },
        $httpProvider
      );

      $locationProvider.html5Mode(true);
  }]);
