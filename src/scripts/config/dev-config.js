require.config({
	baseUrl: 'scripts',

	paths: {
		'angular': '../lib/bower/angular/angular',

		'ng-route': '../lib/bower/angular-route/angular-route'
	},

	shim: {
		'angular': {
			exports: 'angular'
		},
		'ng-route': ['angular']
	}
});

require(['bootstrap']);
