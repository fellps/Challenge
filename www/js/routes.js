angular.module('config.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // Abstract state
    .state('app', {
      url: '/app',
      controller: 'TemplateCtrl',
      templateUrl: 'app/templates/main.html',
      abstract: true,
      cache: false
    })

    // Home page
    .state('app.home', {
      url: '/',
      views: {
        'content': {
          templateUrl: 'app/templates/home.html'
        }
      }
    })

    // Notification page
    .state('app.notification', {
      url: '/notificationDetails',
      views: {
        'content': {
          templateUrl: 'app/notification/notification.html',
          controller: 'NotificationCtrl'
        }
      }
    })
    
    // If none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/')
})