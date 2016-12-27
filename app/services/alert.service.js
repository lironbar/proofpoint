angular.module('app')
.service('alertService', ['$http', function($http) {
	var self = this;

	self.getJson = function(cb) {
		$http.get('app/data/alert.json').then(
			function(response){
				cb(response);
			},
			function (response){
				cb(response);
			}
		);
	};

}]);
