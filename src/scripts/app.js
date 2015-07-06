define(['angular', 'ng-route', './route-config', './modules/demo/demo-module'], function(angular, ngRoute, routeConfig){
  'use strict';

	var app = angular.module('myApp', ['ngRoute', 'demoModule']);

	app.config(['$routeProvider', routeConfig]);

	return app;
});
