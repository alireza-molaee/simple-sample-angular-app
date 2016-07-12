'use strict';

angular.module('ssap.sendPost', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/send-post', {
            templateUrl: 'send-post/send-post.html',
            controller: 'sendPostCtrl'
        });
    }])

    .controller('sendPostCtrl', [function () {

    }]);
