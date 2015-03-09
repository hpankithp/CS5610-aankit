var app = angular.module("Demo", ['ngRoute']);

app.controller("controller1", function ($scope) {
    console.log("Hello");

});

app.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/home', {
            templateUrl: './home.html',
        }).
        when('/about', {
            templateUrl: './about.html',
        }).
        when('/contact', {
            templateUrl: './contact.html',
        }).
        otherwise({
            redirectTo: '/home'
        });
  }]);