var app = angular.module("Demo", ['ngRoute']);

app.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/home', {
            templateUrl: '/home.html',
        }).
        when('/about', {
            templateUrl: '/about.htm',
        }).
        when('/contact', {
            templateUrl: '/contact.htm',
        }).
        otherwise({
            redirectTo: '/home'
        });
  }]);