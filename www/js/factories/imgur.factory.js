angular.module('factory.imgur', ['ionic'])
  .factory('$imgurApi', ['$ionicLoading', '$cordovaFileTransfer', function($ionicLoading, $cordovaFileTransfer) {
    return {

      auth: function() {
        $cordovaOauth.imgur("1c84f2092a12413").then(function(result) {
          console.log(JSON.stringify(result))
          result.expires_at = (new Date).getTime() + (result.expires_in * 1000)
          $localStorage.imgur = {
            oauth: result
          }
          imgurInstance = new $imgur(result.access_token)
        }, function(error) {
          console.log(error)
        })  
      },
      
      upload: function(imageData) {
        $ionicLoading.show({template: "Uploading..."})
        var options = {
          fileKey: "image",
          fileName: "image.jpg",
          chunkedMode: false,
          mimeType: "image/jpeg",
          headers: {
            "Authorization": "Bearer " + imgurInstance.getAccessToken()
          }
        }
        console.log($cordovaFileTransfer)
        $cordovaFileTransfer.upload("https://api.imgur.com/3/image", imageData, options).then(function(result) {
            console.log(result)
        }, function(error) {
            console.error(error)
        }).then(function() {
            $ionicLoading.hide()
        })
      }
    }
  }])
