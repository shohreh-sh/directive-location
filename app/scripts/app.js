'use strict';

/**
 * @ngdoc overview
 * @name locationDirectiveApp
 * @description
 * # locationDirectiveApp
 *
 * Main module of the application.
 */
angular
  .module('locationDirectiveApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.select'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


/**
 * @ngdoc bootstrap
 * @name locationDirectiveApp
 *
 */
(function () {

  if (!angular.mock) {
    angular.element(document).ready(function () {
      angular.bootstrap(document, ['locationDirectiveApp']);
    });
  }
})();
