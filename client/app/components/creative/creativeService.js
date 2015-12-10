angular.module('cult.creative', [])
  .factory('sendToken', function(){
    return function(token, amount){
      $http({
        method: 'POST',
        url: '/charge',
        data: {
          stripeToken: token.id,
          amount: amount
        }
      })
    }
  })
  .factory('stripeCharge', ['sendToken', function(sendToken){
    
  }])
