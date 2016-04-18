/**
 * 
 */

var demoApp = angular.module('demoApp', ['ngRoute','ngResource' ]);

demoApp.config(function($routeProvider){
	 $routeProvider.
    	when('/weather', {
    		controller: 'SimpleController',
    		templateUrl: 'Weather.html'
    	})
    	.otherwise({
            redirectTo: '/weather'
        });
});

demoApp.factory ('simpleFactory', ['$http', '$q',function($http, $rootScope, $q){
	var customers =  [ 
	                     {name:'John Smith',city:'Phoenix', amt:'2000'} , 
	                     {name:'John Doe',city:'New York', amt:'1000'},
	                     {name:'Jane Doe',city:'Washington', amt:'4100'}
	                    ];
	var factory = {};
	factory.getCustomers = function()
	{
		return customers;
	};
	
	return factory;
	
}]);

demoApp.service('simpleService', function($http,$resource, $rootScope, $q) {
	
	this.weatherInformation = function(text){
		var call_url = 'http://api.worldweatheronline.com/free/v1/weather.ashx?q=06611&format=json&num_of_days=5&key=atf6ya6bbz3v5u5q8um82pev&callback=JSON_CALLBACK';
		var defer = $q.defer();
		$http.jsonp(call_url)
		    .success(function(res){
		    	 console.log("In simpleService : " + JSON.stringify(res));
		        return defer.resolve(res);
		    })
		    .error(function (err,status){
		    	return defer.reject(err);
		    });
		return defer.promise;		
	};
});

demoApp.controller('SimpleController',
		function ($scope,simpleFactory,simpleService)
		{
			$scope.customers = [ ];
			
			init();
			function init()
			{
				$scope.customers = simpleFactory.getCustomers();
			}
			$scope.addCustomer = function(){
				$scope.customers.push({
					name: $scope.newCustomer.name,	
					city: $scope.newCustomer.city,	
					amt: $scope.newCustomer.amt,	
				});
			};
			
			$scope.getWeather = function(){
				
			var promise = 	simpleService.weatherInformation("World");
			promise.then(
			          function(res) { 
			              $scope.weatherInformation = res.data;
			          },
			          function(err) {
			              $log.error('failure loading movie', err);
			          });
				
				
				//$scope.weatherInformation = simpleService.weatherInformation("World");
				//console.log("In SimpleController : " + JSON.stringify($scope.weatherInformation));
			};
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
		});			