var app = angular.module("angularDemo", []);

app.filter('reverse', function () {
    return function (text) {
        return text.split("").reverse().join("");
    }
});

app.controller("MyController", function ($scope) {
   $scope.data = {
       message: ""
   };

   $scope.reversedMessage = function (message) {
       return message.split("").reverse().join("");
   }
});
