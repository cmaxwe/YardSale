var App = angular.module('App', []);

App.controller('ItemsCtrl', function($scope, $http) {
  $http.get('/json/items.json')
       .then(function(res){
          $scope.items = res.data;             
        });
});
