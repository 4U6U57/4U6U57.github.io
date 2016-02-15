var materialApp = angular.module('MaterialApp', ['ngMaterial']);
materialApp.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('deep-orange')
    .accentPalette('red');
});
var firebaseApp = angular.module('FirebaseApp', ['firebase']);
var firebase = 'https://4U6U57.firebaseio.com/website';
firebaseApp.factory("indexArray", ['$firebaseArray',
    function(firebaseArray) {
      var ref = new Firebase(firebase);
      return $firebaseArray(ref);
    }]);
firebaseApp.controller("IndexCtrl", ['$scope', '$indexArray',
    function(scope, indexArray) {
      $scope.index = indexArray;
    }]);
firebaseApp.controller("IndexCtrl", function($scope, $firebaseObject) {
  var ref = new Firebase(firebase);
  $scope.index = $firebaseObject(ref);
});
var app = angular.module('IndexApp', ['MaterialApp', 'FirebaseApp']);
