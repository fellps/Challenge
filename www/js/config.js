angular.module('config', [])

  .config(function($ionicConfigProvider) {
    $ionicConfigProvider.views.swipeBackEnabled(false)
  })

  .service('apiConfig', function() {
    var apiConfig = this
    var environment = 'dev'

    // We can add different environments
    // STG, PRD etc.
    var _environments = {
      dev: {
        host: 'localhost:9502',
        config: {
          apiEndpoint: 'http://localhost:9502/'
        }
      }
    }

    // Get url service from current environment
    apiConfig.urlService = function () {
      return _environments[environment].config.apiEndpoint
    }
  })
