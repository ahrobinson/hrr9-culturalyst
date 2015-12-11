angular.module('cult.creative', [])
  .controller('PymtController', ['$scope','charge', function($scope, charge){
    $scope.amount;
    $scope.charge = function(){
      charge($scope.amount);
    }
  }])
  .controller('CreativeController', ['$state', function($state){
    $state.go('creative.bio')
  }])
