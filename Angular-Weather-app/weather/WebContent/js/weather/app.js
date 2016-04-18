/**
 *Service Config and Controller Js file... This needs to be broken out... 
 */

angular.module('demoApp', ['ngRoute','ngResource' ])

.config(function($routeProvider){
	 $routeProvider.
    	when('/weather', {
    		controller: 'WeatherController',
    		templateUrl: 'Weather.html'
    	})
    	.otherwise({
            redirectTo: '/weather'
        });
});
