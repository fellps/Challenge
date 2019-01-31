angular.module('config.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // Abstract state
    .state('app', {
      url: '/app',
      templateUrl: 'application/templates/main.html',
      abstract: true,
      controller: 'TemplatesCtrl',
      cache: false
    })

    // Home page
    .state('app.home', {
      url: '/',
      controller: 'HomeCtrl',
      views: {
        'content': {
          templateUrl: 'application/templates/home.html'
        }
      }
    })

    // Notification page
    .state('app.notification', {
      url: '/notification',
      views: {
        'content': {
          templateUrl: 'application/notification/index.html'
        }
      }
    })
    
    // If none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/')
})