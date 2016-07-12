'use strict';

angular.module('ssap.blog', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/blog', {
            templateUrl: 'blog/blog.html',
            controller: 'blogCtrl'
        });
    }])

    .controller('blogCtrl', function($scope, $route) {
        var PageCount = Math.ceil(Posts.length / 10);
        $scope.pageList = [];
        for (var i = 1; i <= PageCount; i++){
            $scope.pageList.push(i);
        }

        $scope.currentPage = 1;

        $scope.goToPage = function (page) {
            $scope.currentPage = page;
        }

        $scope.postsInCurrentPage = function () {
            var pointToSlice = ($scope.currentPage - 1) * 10;
            return Posts.slice(pointToSlice, pointToSlice+10)
        }
        
        
        
    });