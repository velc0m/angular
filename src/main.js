var app = angular.module("angularDemo", []);

app.filter('reverse', function () {
    return function (text) {
        return text.split("").reverse().join("");
    }
});

app.controller("MyController", function ($scope, filmService) {
   $scope.data = {
       message: ""
   };

   $scope.films = filmService.getFilms();

   $scope.reversedMessage = function (message) {
       return message.split("").reverse().join("");
   }
});

//create service
app.factory("filmService", function () {
   return {
     getFilms: function () {
         return [
             {
                 color: "red",
                 value: "#f00"
             },
             {
                 color: "green",
                 value: "#0f0"
             },
             {
                 color: "blue",
                 value: "#00f"
             },
             {
                 color: "cyan",
                 value: "#0ff"
             },
             {
                 color: "magenta",
                 value: "#f0f"
             },
             {
                 color: "yellow",
                 value: "#ff0"
             },
             {
                 color: "black",
                 value: "#000"
             }
         ]
     }  
   };
});
