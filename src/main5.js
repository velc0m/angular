var app = angular.module("angularDemo", []);

app.directive("entity", function () {
  return {
      restrict: "E",
      scope: {},
      controller: function ($scope) {
          $scope.abilities = [];
          this.addFly = function () {
              $scope.abilities.push("fly");
          };

          this.addSwim = function () {
              $scope.abilities.push("swim");
          };

          this.addWalk = function () {
              $scope.abilities.push("walk");
          };
      },
      link: function(scope, element) {
          element.addClass("well");
          element.bind("mouseenter", function () {
              console.log(scope.abilities);
          })
      }
  }
});

app.directive("fly", function () {
   return {
       require: "entity",
       restrict: "A",
       link: function (scope, element, attrs, entityCtrl) {
           entityCtrl.addFly();
       }
   }
});

app.directive("swim", function () {
    return {
        require: "entity",
        restrict: "A",
        link: function (scope, element, attrs, entityCtrl) {
            entityCtrl.addSwim();
        }
    }
});

app.directive("walk", function () {
    return {
        require: "entity",
        restrict: "A",
        link: function (scope, element, attrs, entityCtrl) {
            entityCtrl.addWalk();
        }
    }
});
