angular.module('demoApp')

.service('simpleService', function($http,$resource, $rootScope, $q) {
	
	this.weatherInformation = function(zipCode){
 		var call_url = 'http://api.worldweatheronline.com/free/v1/weather.ashx?q='+ zipCode +'&format=json&num_of_days=5&key=atf6ya6bbz3v5u5q8um82pev&callback=JSON_CALLBACK';
//		alert("This is the URL " + call_url);
		var defer = $q.defer();
		$http.jsonp(call_url)
		    .success(function(res){
		    	//console.log("In simpleService : " + JSON.stringify(res));
		        return defer.resolve(res);
		    })
		    .error(function (err,status){
		    	return defer.reject(err);
		    });
		return defer.promise;		
	};
	
	/*this.searchGoogleAPI = function(zipCode)
	{
		var call_url = 'https://maps.googleapis.com/maps/api/geocode/json?address=Stamford,CT&key=AIzaSyBYTHUqHm9o4t5bkV_OQlsBAdTqflpFaB8';
		var defer = $q.defer();
		$http({
		    method: 'JSONP',
		    url: call_url ,
		    params : {callback : 'JSON_CALLBACK'}
		})
		.success(function(data){
		    console.log('Success: ' + data);
		    return defer.resolve(res);
		}).
		error(function(data){
		    console.log('Error: ' + data);
		    return defer.reject(err);
		});		
		
		return defer.promise;					
			
	};
	*/
	
});