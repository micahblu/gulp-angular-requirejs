define(['angular', 'ng-route', './demo-route-config'], function(angular, ngRoute, demoRouteConfig){
  'use strict';

  var module = angular.module('demoModule', []);

  module.config(['$routeProvider', demoRouteConfig]);

});
