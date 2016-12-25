'use strict';

angular.module('app').
controller('booksListCtrl', ['$scope','$window', 'books', function($scope, $window, books) {

  var divs = $('#titleSm, #titleLg, #titleMd');
  $(window).on('scroll', function () {
    var st = $(this).scrollTop();
    divs.css({ 'opacity' : (1 - st/350) });
  });

  $scope.orderProp = 'Id';

  // add books data on scope.
  $scope.books = books;

  // transform date to valid date data.
  for (var i = 0; i < $scope.books.length; i++) {
    $scope.books[i].Date = new Date($scope.books[i].Date);
  }

  // validate if edited field has been filled.
  $scope.checkField = function(data, id) {
    if (!data) {
      return "*Cannot be empty";
    }
  };

  // remove book from table.
  $scope.removeBook = function(index) {
    var result = confirm("Are you sure you want to delete?");
    if(result) {
      $scope.books.splice(index, 1);
    }
  };

}]);
