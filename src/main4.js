var app = angular.module("angularDemo", []);

app.controller("AppCtrl", function ($scope) {
    $scope.showHelloMessage = function () {
        alert("hello!");
    }

    $scope.showName = function () {
        alert("Vitali");
    }
});

app.directive("hightlight", function () {
  return function (scope, element, attrs) {
        element.bind("mouseenter", function () {
            //scope.showHelloMessage();
            scope.$apply(attrs.hightlight);
        });
  }
});
