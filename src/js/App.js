/**
 * @class js.App
 *
 * App Example ryan
 *
 * ## Usage
 * Attach the controller to the div element
 *
 *     <html ng-app="App">
 *          <div ng-controller="AppCtrl">
 *
 */

/*globals window, angular*/

angular.module('App', ['Child'])

    .config(function ($routeProvider) {
        'use strict';

        $routeProvider.
            when('/', { controller: 'ChildCtrl', templateUrl: '../src/html/modules/Child.html' }).
            otherwise({ redirectTo: '/' });
    })

    /**
     * @method AppCtrl - This controls the main app
     * @param {Object} $scope - The current scope
     */
    .controller('AppCtrl', function ($scope) {
        'use strict';
        
        console.log('AppCtrl', this);
    });