'use strict';

angular.module('ssap.sendPost', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/send-post', {
            templateUrl: 'send-post/send-post.html',
            controller: 'sendPostCtrl'
        });
    }])

    .controller('sendPostCtrl', ['$scope', function ($scope) {
        console.log(Posts);
        $scope.addNewPost = function () {
            $scope.post.date = new Date();
            Posts.push($scope.post);
            console.log(Posts);
        }
    }]);
