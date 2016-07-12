'use strict';

angular.module('ssap.home', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'home/home.html',
            controller: 'homeCtrl'
        });
    }])

    .controller('homeCtrl', ['$scope', function ($scope) {
        $scope.lastPost = Posts.slice(-3);
    }]);