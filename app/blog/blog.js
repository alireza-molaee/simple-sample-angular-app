'use strict';

angular.module('ssap.blog', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/blog', {
            templateUrl: 'blog/blog.html',
            controller: 'blogCtrl'
        });
    }])

    .controller('blogCtrl', function($scope, $route) {

    });