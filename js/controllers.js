'use strict';

/* Controllers */

var App = angular.module('ValerioLucantonio', []);


//phonecatApp.controller('InfoCtrl', function ($scope) {
 //$scope.info = {'about': 'Nexus S'};
 // });
/*
phonecatApp.controller('InfoCtrl', function($scope){ 
 // function ($scope, $http) {
   // $http.get('phones/page_content.json').success(function(data) {
      $scope.info = { 'about' : 'ciaoocoaoco' };
    });
  */
  App.controller('InfoCtrl', function ($scope, $http) {
  $http.get('data/about.json').success(function(data) {
    $scope.info = data;
  	});

  });
  App.controller('EduCtrl', function ($scope, $http) {
  $http.get('data/educations.json').success(function(data) {
    $scope.edu = data;
  	});

  });
  App.controller('ProCtrl', function ($scope, $http) {
  $http.get('data/projects.json').success(function(data) {
    $scope.pro = data;
    });

  });
  
  App.controller('ProgrammingCtrl', function ($scope, $http) {
  $http.get('data/programminglang.json').success(function(data) {
    $scope.prog = data;
    });

  });
  App.controller('FrameworkCtrl', function ($scope, $http) {
  $http.get('data/frameworks.json').success(function(data) {
    $scope.frame = data;
    });

  });
  App.controller('LanguageCtrl', function ($scope, $http) {
  $http.get('data/languages.json').success(function(data) {
    $scope.lang = data;
    });

  });

