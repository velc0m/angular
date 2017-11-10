var app = angular.module("angularDemo", []);
app.controller("MyController", function ($scope) {
   $scope.data = {
       message: "Hello!"
   }
});
