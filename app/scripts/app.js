'use strict';

var app = angular.module('questionaryApp', [
  'ngCookies',
  'ngRoute',
  'ngResource'
]);

app.run(['$http', '$cookies', function ($http, $cookies){
  $http.defaults.headers.common['X-CSRFToken'] = $cookies['csrftoken'];
}]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/questions', {
      templateUrl: 'views/list.html',
      controller: 'ListCtrl'
    }).when('/question/:id?', {
      templateUrl: 'views/edit.html',
      controller: 'EditCtrl'
    }).otherwise({
      redirectTo: '/questions'
    });
}]);