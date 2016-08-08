// add code to strike-through text if checkbox is clicked

var toDoApp = angular.module('toDoApp', []);
toDoApp.controller('toDoController', function($scope){

	$scope.tasks = [];

	$scope.addTask = function(){
		$scope.tasks.push(
			{
				completed: null,
				title: $scope.title,
				deadline: $scope.deadline,
				description: $scope.description
			}
		);
		$scope.title = "";
		$scope.deadline = "";
		$scope.description = "";
	}

	$scope.removeTask = function(index){
		$scope.tasks.splice(index,1);
	}

});