var tryit = angular.module('tryit',[]);

tryit.controller('contrydataCtrl', ['$scope','$http', function ($scope,$http) {
	
	
	$scope.list = $http({
  method: 'GET',
  url: 'https://restcountries.eu/rest/v2/all'
}).then(function successCallback(response) {
    	// console.log(response)
    	$scope.name = response.data;
    	// console.log($scope.name);
  }, function errorCallback(response) {
    	console.log(response)
  });
}])
