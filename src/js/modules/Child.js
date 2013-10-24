/**
 * @class js.modules.Child
 *
 * App Example
 *
 * ## Usage
 * Attach the controller to the div element
 *
 *     <html ng-app="App">
 *          <div ng-controller="AppCtrl">
 *
 */

/*globals window, angular, SockJS*/

angular.module('Child', [])

    .controller('ChildCtrl', function ($scope) {
        'use strict';
        
        console.log('Child', $scope);
        
        var sock = new SockJS('http://localhost:9999/chat');

        $scope.messages = [];
        $scope.sendMessage = function () {
            sock.send($scope.messageText);
            $scope.messageText = "";
        };

        sock.onmessage = function (e) {
            $scope.messages.push(e.data);
            $scope.$apply();
        };
    });