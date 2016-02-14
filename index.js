var materialApp = angular.module('MaterialApp', ['ngMaterial']);
materialApp.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('deep-orange')
    .accentPalette('red');
});
materialApp.controller("IndexCtrl", function($scope, $http) {
  $scope.index = null;
  $http.get('index.json')
    .success(function(data) {
      $scope.index = data;
    })
  .error(function(data, status, error, config) {
    $scope.contents = null;
  });
});
var app = angular.module('IndexApp', ['MaterialApp']);