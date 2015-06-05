/* istanbul ignore next */
define(function(require) {

	return function(app) {

		app.controller("HelloController", function($scope) {
		  $scope.sometext = "AngularJS";
		});
	}
});

