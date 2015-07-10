define(function(require) {
  'use strict';

   var angular = require('angular'),
       ngRoute = require('ng-route'),
       routeConfig = require('./route-config'),
       toggleMenuDirective = require('./directives/toggle-menu/toggle-menu-directive'),
       demoModule = require('./modules/demo/demo-module'),
       aboutModule = require('./modules/about/about-module');


	 var app = angular.module('myApp', ['ngRoute', 'demoModule', 'aboutModule']);

   app.directive('toggleMenu', toggleMenuDirective);

	 app.config(['$routeProvider', routeConfig]);

	return app;
});
