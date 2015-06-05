/* istanbul ignore next */
define(function(require) {
	
  var angular = require('angular');

  var app = angular.module("myapp", []);
  require('controller')(app);

  return app;
});

