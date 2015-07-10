require.config({
	baseUrl: 'scripts',

	paths: {
		'angular': '../lib/bower/angular/angular',

		'ng-route': '../lib/bower/angular-route/angular-route',

		'jquery': '../lib/bower/jquery/dist/jquery'
	},

	shim: {
		'angular': {
			exports: 'angular',
			deps: ['jquery']
		},
		'ng-route': ['angular']
	}
});

require(['bootstrap']);
