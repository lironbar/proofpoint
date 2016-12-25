'use strict';
angular.
module('alertList').
component('alertList', {
  templateUrl: 'app/alert-list/alert-list.html',
  controller: ['$http', '$scope', 'alertFactory', function mainCtrl($http, $scope, alertFactory) {

    $scope.theAlert = {};

    $scope.$watch(function() {return alertFactory.alertList}, function(nVal,oVal) {
      $scope.alertList = nVal;
      console.log($scope.alertList);
    });

    $scope.getItem = function(alert) {

      $scope.theAlert = alert;
      console.log($scope.theAlert);
    }


    $scope.checkField = function(data) {
      if (!data) {
        return "*Cannot be empty";
      }
    };




  }]
});
