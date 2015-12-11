angular.module('cult.creative', [])
  .controller('PymtController', ['$scope','charge', function($scope, charge){
    $scope.amount;
    $scope.charge = function(){
      charge($scope.amount);
    }
  }])
