require.config({


  //baseUrl: "./js/",


  paths:{
      'jquery': '../bower_components/jquery/dist/jquery.min',
      // 'jquery-ui': '../bower_components/jquery-ui/jquery-ui.min',
      'angular': '../bower_components/angular/angular.min',
      'angular-route': '../bower_components/angular-route/angular-route.min',
      'angular-ui-router': '../bower_components/angular-ui-router/release/angular-ui-router.min'
  },


  shim:{
      'jquery': {
            exports: 'jquery'
      },
      // 'jquery-ui': {
      //     exports: 'jquery',
      //     deps: ['jquery']
      // },

      angular: {
        deps: ['jquery'],
        exports: 'angular'
      },

      'angular-route': ['angular'],
      'angular-ui-router': ['angular']
  },


  //deps: ['app']
});

require([
  'jquery',
  'angular',
  './app'
], function($, angular, app) {
    angular.element(document).ready(function() {
      angular.bootstrap(document, [app.name]);
  });
})
