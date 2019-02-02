/**
 * This service is used to get settings from the current environment
 */

angular.module('config', [])

  .config(function($ionicConfigProvider) {
    $ionicConfigProvider.views.swipeBackEnabled(false)
  })

  .service('$apiConfig', function() {
    var apiConfig = this
    var currentEnvironment = 'dev'

    // We can add different environments, STG, PRD..
    var _environments = {
      dev: {
        config: {
          // API settings
          apiEndpoint       : 'http://192.168.0.15:9502/',
          
          // Firebase settings
          apiKey            : 'AIzaSyCdHv1W_zidG9Uexze3vpucoOJ0iPmBhq0',
          authDomain        : 'youper-challenge-upload.firebaseapp.com',
          projectId         : 'youper-challenge-upload',
          databaseURL       : 'https://youper-challenge-upload.firebaseio.com',
          storageBucket     : 'youper-challenge-upload.appspot.com',
          messagingSenderId : 'Y696596177056'
        }
      }
    }

    // Get url service from current environment
    apiConfig.getUrlService = function () {
      return _environments[currentEnvironment].config.apiEndpoint
    }

    // Get url service from current environment
    apiConfig.getConfig = function () {
      return _environments[currentEnvironment].config
    }
  })
