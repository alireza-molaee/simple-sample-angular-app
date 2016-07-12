'use strict';

angular.module('ssap.post', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/post', {
            templateUrl: 'post/post.html',
            controller: 'postCtrl'
        });
    }])

    .controller('postCtrl', [function () {

    }]);
