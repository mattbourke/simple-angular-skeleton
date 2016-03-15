
var myApp = angular.module('myApp', ['ngRoute'])
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/home',
            {
                controller: 'HomeController',
                templateUrl: 'app/home/home.html'
            })
        .otherwise({ redirectTo: '/home' });
}]);