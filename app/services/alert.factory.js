angular.module('app')
.service('alertFactory', ['$http', function($http) {
	var self = this;

	$http.get('app/data/alert.json').then(function(response){
		self.alertList = response.data || [];
    console.log(self.alertList);
	});


}]);
