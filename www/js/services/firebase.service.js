/**
 * This service is used to interaction with firebase
 */

angular.module('services.firebase', ['ionic'])

  .service('$firebase', function(Firebase, $ionicLoading, $apiConfig) {
    var apiService = this
    var config = $apiConfig.getConfig()

    // Upload image to Firebase
    apiService.upload = function(imageData) {
      $ionicLoading.show({template: "Uploading..."})

      var firebaseConfig = {
        apiKey: config.apiKey,
        authDomain: config.authDomain,
        projectId: config.projectId,
        databaseURL: config.databaseURL,
        storageBucket: config.storageBucket,
        messagingSenderId: config.messagingSenderId
      }
      Firebase.initializeApp(firebaseConfig)

      var ref = Firebase.storage().ref().child("avatar.jpg")
      ref.putString(imageData, 'base64').then(function(snapshot) {
        $ionicLoading.hide()
      })
    }
  })