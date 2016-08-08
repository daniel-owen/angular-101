var yearBornApp = angular.module('yearBornApp', []);
yearBornApp.controller('yearBornController', function($scope){
	$scope.showAge = function(){
		var currentYear = new Date().getFullYear()
		$scope.birthYear = (currentYear - $scope.age);
		$scope.ageEntered = true;	
	}
});