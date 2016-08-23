app.factory('auth', ['$http', function ($http){
  var auth = {};

  auth.register = function(user){

    var successCallback = function() {
    console.log("back from the server");
    }
    
    var errorCallback = function() {
    console.log("there was an error");
    }
    
    return $http.post('http://localhost:8000/register', user).then(successCallback, errorCallback);

  };

  auth.login = function(user){

    var successCallback = function() {
    console.log("back from the server");
    }
    
    var errorCallback = function() {
    console.log("there was an error");
    }
    
    return $http.post('http://localhost:8000/login', user).then(successCallback, errorCallback);

  };  

  return auth;
}]);