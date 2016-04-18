angular.module('demoApp')
.controller('WeatherController', function($scope, simpleService) {
	$scope.getWeather = function(zipCode) 
	{
		var promise = simpleService.weatherInformation(zipCode);
		promise.then(function(res) {
			$scope.weatherInformation = res.data;
		}, function(err) {
			$log.error('failure loading movie', err);
		});
	};
	
	
	$scope.searchGoogleAPI= function(passedInData) 
	{
		
		$scope.addr = {};
		var geocoder = new google.maps.Geocoder();
		geocoder
				.geocode(
						{
							'address' : passedInData  
							
						},
						function(results, status) {
							if (status == google.maps.GeocoderStatus.OK) {
								if (results.length >= 1) {
									for (var ii = 0; ii < results.length; ii++) {
										$scope.addr[ii]=results[ii].formatted_address;
										console.log(results[ii].formatted_address);
									}
								} 
							} 
						});		
		/*var promise = simpleService.searchGoogleAPI(zipCode);
		promise.then(function(res) {
			$scope.weatherInformation = res.data;
		}, function(err) {
			$log.error('failure loading movie', err);
		});		*/
		
	};
	
});