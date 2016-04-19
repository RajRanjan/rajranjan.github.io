var angular = require('angular');
require('angular-ui-router');
require('angular-ui-bootstrap');
angular.module('rajRanjan', ['ui.router', 'ui.bootstrap'])

//configuration block of the app
angular.module('rajRanjan').config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('dashboard', {
        url: "/dashboard",
        controller: "dashboardController",
        templateUrl: "app/components/dashboard/dashboard.html"


    })
    .state('projects', {
        url: "/projects",
        controller: "projectController",
        templateUrl: "app/components/projects/project.html"


    });
    $urlRouterProvider.otherwise("/dashboard");
});

require('./components');
