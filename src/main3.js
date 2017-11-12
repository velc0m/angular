var app = angular.module("angularDemo", []);

app.directive("enter", function () {
    return {
        restrict: "A",
        link: function ($scope, element) {
            element.bind("mouseenter", function () {
                console.log("Inside");
            })
        }
    }
});

//shortcut
app.directive("leave", function () {
    return function ($scope, element) {
        element.bind("mouseleave", function () {
            console.log("Outside");
        })
    }
});

app.directive("hightlight", function () {
    return function ($scope, element) {
        element.bind("mouseenter", function () {
            element.addClass("alert-info");
        });
        element.bind("mouseleave", function () {
            element.removeClass("alert-info");
        });
    }
});

app.directive("hightlightDynamic", function () {
    return function ($scope, element, attrs) {
        element.bind("mouseenter", function () {
            element.addClass(attrs.hightlightDynamic);
        });
        element.bind("mouseleave", function () {
            element.removeClass(attrs.hightlightDynamic);
        });
    }
});
