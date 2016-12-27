'use strict';
angular.
module('alertList').
component('alertList', {
  templateUrl: 'app/alert-list/alert-list.html',
  controller: ['$http', '$scope', 'alertService', function mainCtrl($http, $scope, alertService) {

    //for displaying and editing the alert.
    var alertIndex;
    $scope.theAlert = {};

    alertService.getJson(function(res) {
      if (res.data) {
        $scope.alertList = res.data;
      }
      else {
        alert('Failed to load data')
      }
    });

    $scope.getAlert = function(alert, index) {
      $scope.theAlert = angular.copy(alert);
      alertIndex = index;
    }

    $scope.saveAlert = function(data) {
      if (data) {
        var alertData = data;
        if (alertData.Name.length > 0 || alertData.Description > 0) {
          $scope.alertList[alertIndex] = alertData;
        }
      }
    }

    $scope.removeAlert = function() {
      var result = confirm("Are you sure you want to delete?");
      if (result) {
        $scope.alertList.splice(alertIndex, 1);
        $scope.theAlert = {};
      }
    }

    $scope.addNewAlert = function() {
      var idIndex = $scope.alertList.length+1;
      $scope.selectedItem = $scope.itemList[0];
      var aNewAlert = {
        "Id": idIndex,
        "Name": "New Alert" + idIndex,
        "Description": "*"
      };
      $scope.theAlert = aNewAlert;
      $scope.alertList.push(aNewAlert);
    }

    //dropdown manu
    $scope.itemList = ["Box","Godaddy","Google Apps","Salesforce"];
    $scope.dropDownList = function(item) {
      if(item) {
        $scope.theAlert.Details = item;
      }
    }

  }]
});
