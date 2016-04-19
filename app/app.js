var angular=require('angular');
require('angular-ui-router');
require('angular-ui-bootstrap');
angular.module('rajRanjan',['ui.router','ui.bootstrap'])

//configuration block of the app
angular.module('rajRanjan').config(function($stateProvider,$urlRouterProvider){
	    $stateProvider.state('dashboard',{
	    	url : "/dashboard",
	    	views : {
	    		"index-view ": {
	    			controller : "dashboardController"
	    		}
	    	}
	    	
	    });
	    $urlRouterProvider.otherwise("/dashboard");
});

require('./components');



















