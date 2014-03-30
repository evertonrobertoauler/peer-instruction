'use strict';

var app = angular.module('questionaryApp');

app.factory('Questions', ['$resource', function($resource) {
    return $resource('http://127.0.0.1:3000/api/questions', {}, {
      'getAll': {method: 'GET', isArray: true},
    });
  }]);

app.factory('Question', ['$resource', function($resource) {
    return $resource('http://127.0.0.1:3000/api/question/:id', {id: '@id'}, {
      'get': {method: 'GET'},
      'post': {method: 'POST'},
      'put': {method: 'PUT'},
      'delete': {method: 'DELETE'}
    });
  }]);