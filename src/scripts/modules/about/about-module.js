define(['angular', 'ng-route', './about-route-config'], function(angular, ngRoute, aboutRouteConfig){
  'use strict';

  var module = angular.module('aboutModule', []);

  module.config(['$routeProvider', aboutRouteConfig]);

});
