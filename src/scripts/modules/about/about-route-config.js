define(function() {
  'use strict';

  return function($routeProvider) {
    $routeProvider.when('/about', {
      templateUrl: '/scripts/modules/about/about.html'
    });
  };
});
