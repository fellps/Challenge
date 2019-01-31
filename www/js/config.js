angular.module('config', [])

  .config(function($ionicConfigProvider) {
    $ionicConfigProvider.views.swipeBackEnabled(false)
  })

  .service('apiConfig', function(){
    var apiConfig = this
    var environment = 'dev'

    // We can add different environments
    // STG, PRD etc.
    var _environments = {
      dev: {
        host: 'dev.nugo.com.br',
        config: {
          apiEndpoint: 'https://api-dev.nugo.com.br/'
        }
      }
    }

    // Get url service from current environment
    apiConfig.urlService = function () {
      return _environments[environment].config.apiEndpoint
    }
  })