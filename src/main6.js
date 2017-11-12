var app = angular.module("angularDemo", []);

app.controller("TaskManagerCtr", function ($scope) {
    $scope.taskDone = function (task) {
        alert(task + " - Task is done!");
    }
});

app.directive("task", function () {
  return {
      restrict: "E",
      scope: {
          done: '&'
      },
      template: '<input type="text" ng-model="task"> ' +
      '{{ task }}' +
      '<button class="btn btn-default" ng-click="done({obj:task})">Done</button>'
  }
});
