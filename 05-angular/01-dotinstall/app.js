angular.module('App', []).controller('MainController', ['$scope', function ($scope) {
	$scope.users = [
		{"name":"solid", "score":15},
		{"name":"liquid", "score":23},
		{"name":"solidus", "score":8},
		{"name":"jack", "score":35},
		{"name":"roy", "score":36},
		{"name":"john", "score":15},
	];

	$scope.today = new Date();

	$scope.add = function() {
		console.log('add');
	};

	$scope.bool = true;

}]).controller('UserController', ['$scope', function ($scope) {
	$scope.increment = function() {
		$scope.user.score++;
	};
}]);
