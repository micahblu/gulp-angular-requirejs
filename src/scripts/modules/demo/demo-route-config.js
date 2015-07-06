define(function() {
  'use strict';

  return function($routeProvider) {
    $routeProvider.when('/demo', {
      templateUrl: '/scripts/modules/demo/demo.html'
    });
  };
});
