'use strict';

// Declare app level module which depends on views, and components
angular.module('angular-seed', [
 'ngRoute',
  'angular-seed.home',
  'angular-seed.register',
  'angular-seed.welcome',
  'angular-seed.Quiz'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

  $routeProvider.otherwise({redirectTo: '/home'});
}]);