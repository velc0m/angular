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
                    name: "Peter",
                    age: 20,
                    films: {
                        text: "AngularJS!",
                        author: "Вова Сидоров",
                        date: "20/10/2013",
                        rate: {id: 1, value: "some"}
                    }
                },
                {
                    name: "Pablo",
                    age: 55,
                    films: {
                        text: "BolerJS!",
                        author: "Вова Сидоров",
                        date: "20/10/2013",
                        rate: {id: 2, value: "some"}
                    }
                },
                {
                    name: "Linda",
                    age: 20,
                    films: {
                        text: "AngularJS!",
                        author: "Вова Сидоров",
                        date: "20/10/2013",
                        rate: {id: 8, value: "some"}
                    }
                },
                {
                    name: "Marta",
                    age: 37,
                    films: {
                        text: "AngularJS!",
                        author: "Вова Сидоров",
                        date: "20/10/2013",
                        rate: {id: 8, value: "some"}
                    }
                },
                {
                    name: "Othello",
                    age: 20,
                    films: {
                        text: "AngularTuTu!",
                        author: "Вови Сидоров",
                        date: "20/10/2013",
                        rate: {id: 1, value: "some"}
                    }
                },
                {
                    name: "Markus",
                    age: 32,
                    films:
                        {
                            text: "AngularJS!",
                            author: "Дуся Сидоров",
                            date: "20/10/2013",
                            rate:
                                {
                                    id: 5,
                                    value: "some"
                                }
                        }
                }
            ]
        }
    };
});
