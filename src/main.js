var app = angular.module("angularDemo", []);
app.controller("MyController", function ($scope) {
   $scope.data = {
       message: ""
   };

   $scope.reversedMessage = function (message) {
       return message.split("").reverse().join("");
   }
});
