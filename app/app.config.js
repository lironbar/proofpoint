angular.
	module('app').
		config(['$locationProvider', '$routeProvider',
			function config($locationProvider, $routeProvider) {
				$locationProvider.hashPrefix('!');

				$routeProvider.
				when ('/alerts', {
					template: '<alert-list></alert-list>'
				}).
				otherwise({redirectTo: '/alerts'});
			}
		]);
