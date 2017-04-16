var app = angular.module ("rs-art", []);

/* Creating controller module for main-container */
app.controller ('mainContainer', ['$scope', '$http', function ($scope, $http) {
  $http.get('data.json').then(function (response) {
      $scope.jsonObj = angular.fromJson(response.data);
    });
}])
