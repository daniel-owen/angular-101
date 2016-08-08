// add show and hide functionality for change results
// add math for change calculation

var cashierApp = angular.module('cashierApp', []);
cashierApp.controller('cashierController', function($scope){

	$scope.makeChange = function(){
		var change = $scope.givenAmount - $scope.billAmount;
		$scope.quarters = 5;
		$scope.dimes = 4;
		$scope.nickels = 3;
		$scope.pennies = 2;
	}

});