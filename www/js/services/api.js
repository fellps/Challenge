angular.module('services.api', ['ionic'])

  .service('api', function($http, apiConfig, $ionicLoading) {
    var apiService = this

    apiService.get = function(urlCall, callback) {

      // Get base url
      apiService.url = apiConfig.urlService()

      $ionicLoading.show({
        content: 'Loading ...',
        animation: 'fade-in',
        showBackdrop: false,
        maxWidth: 200,
        showDelay: 500
      })

      // Shortcut method to perform GET request
      $http.get(apiService.url + urlCall)
        .then(
        
          // Called asynchronously if on success
          function successCallback(receivedData) {
            $ionicLoading.hide()
            
            try{
              callback(decryptedData)
            }
            catch(err){
              callback({valido: false, mensagem : 'Erro no retorno da resposta para aplicação. Tente novamente !'})
            }
          },

          // Called asynchronously if an error occurs
          // or server returns response with an error status
          function errorCallback(response) {
            $ionicLoading.hide()
            callback({valido: false, mensagem : 'Não foi possível finalizar. Tente novamente !'})
          }
        )
    }
  })