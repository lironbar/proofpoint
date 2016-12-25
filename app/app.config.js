angular.
	module('app').
		config(['$locationProvider', '$routeProvider',
			function config($locationProvider, $routeProvider) {
				$locationProvider.hashPrefix('!');

				$routeProvider.
				when ('/alerts', {
					template: '<alert-list></alert-list>'
				}).
				when ('/alerts/:alerts', {
					template: '<alert-detail></alert-detail>'
				}).
				otherwise({redirectTo: '/alerts'});
			}
		]);
