var app = angular.module("angularDemo", []);

//element
app.directive("superman", function () {
    return {
        restrict: "E",
        template: "<div>Hello i'm super man</div>"
    }
});

//attribute
app.directive("superAttribute", function () {
    return {
        restrict: "A",
        link: function () {
            alert("attribute working!!!")
        }
    }
});

//attribute
app.directive("superAttributeNew", function () {
    return {
        restrict: "A",
        link: function () {
            alert("new attribute working!!!")
        }
    }
});

//class
app.directive("superClass", function () {
    return {
        restrict: "C",
        link: function () {
            alert("class working!!!")
        }
    }
});

//comment
app.directive("superComment", function () {
    return {
        restrict: "M",
        link: function () {
            alert("comment working!!!")
        }
    }
});