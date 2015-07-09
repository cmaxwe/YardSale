var App = angular.module('App', []);

App.controller('ItemsCtrl', function($scope, $http) {
  $http.get('items.json')
       .then(function(res){
          $scope.items = res.data;             
        });
});
