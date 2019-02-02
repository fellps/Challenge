angular.module('config', [])

  .config(function($ionicConfigProvider) {
    $ionicConfigProvider.views.swipeBackEnabled(false)
  })

  .service('$apiConfig', function() {
    var apiConfig = this
    var environment = 'dev'

    // We can add different environments
    // STG, PRD etc.
    var _environments = {
      dev: {
        config: {
          apiEndpoint: 'http://192.168.56.1:9502/',
          firebaseEndpoint: 'https://youper-challenge-upload.firebaseapp.com/'
        }
      }
    }

    // Get url service from current environment
    apiConfig.urlService = function () {
      return _environments[environment].config.apiEndpoint
    }

    // Get url service from current environment
    apiConfig.urlFirebase = function () {
      return _environments[environment].config.firebaseEndpoint
    }
  })
