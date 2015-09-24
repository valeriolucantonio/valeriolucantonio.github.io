'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);


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
  phonecatApp.controller('InfoCtrl', function ($scope, $http) {
  $http.get('data/about.json').success(function(data) {
    $scope.info = data;
  	});

  });
  phonecatApp.controller('EduCtrl', function ($scope, $http) {
  $http.get('data/educations.json').success(function(data) {
    $scope.edu = data;
  	});

  });
  phonecatApp.controller('ProCtrl', function ($scope, $http) {
  $http.get('data/projects.json').success(function(data) {
    $scope.pro = data;
    });

  });

