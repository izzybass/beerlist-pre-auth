app.controller('AuthCtrl', ['$scope', '$state', 'auth', function($scope, $state, auth){
  $scope.register = function () {
    auth.register($scope.user).then function(){

    //now change pages to the home page

    $state.go('.home');
  };
  }

    $scope.login = function () {
    auth.login($scope.user).then function(){

    //now change pages to the home page

    $state.go('.home');
  };
  }
}]);