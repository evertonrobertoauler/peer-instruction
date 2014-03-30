'use strict';

var app = angular.module('questionaryApp');

app.controller('ListCtrl', ['$scope', 'Questions', function($scope, Questions) {

    $scope.questions = Questions.getAll();

  }]);

app.controller('EditCtrl', ['$scope', '$routeParams', '$location', 'Question',
  function($scope, $routeParams, $location, Question) {

    $scope.question = {
      answers: [{answer: ""}, {answer: ""}, {answer: ""}, {answer: ""}, {answer: ""}],
      title: ""
    };

    if ($routeParams.id)
    {
      Question.get({id: $routeParams.id}, function(question) {
        $scope.question = question;
        $scope.canDelete = true;
      });
    }

    $scope.save = function() {

      var method = ($scope.question._id ? 'put' : 'post');

      Question[method]($scope.question, function() {
        $location.path('#/questions');
      });
    };

    $scope.delete = function() {
      Question.delete({id: $scope.question._id}, function() {
        $location.path('#/questions');
      });
    };
  }]);