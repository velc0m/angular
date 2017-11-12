var app = angular.module("angularDemo", []);

app.directive("superman", function () {
   return {
       restrict: "E",
       template: "<div>Hello i'm super man</div>"
   }
});