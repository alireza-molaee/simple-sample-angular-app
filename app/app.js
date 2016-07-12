'use strict';

// Declare app level module which depends on views, and components
angular.module('ssap', [
        'ngRoute',
        'ssap.home',
        'ssap.blog'
    ])
    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.otherwise({
            redirectTo: '/home',
        });
    }])

    .controller('mainCtrl', function ($scope) {
        $scope.cheek_nav_bar_active = function (navBarId) {
            return navBarId === $scope.nav_bar_active
        }
    });