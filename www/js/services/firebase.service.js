angular.module('services.firebase', ['ionic'])

  .service('$firebase', function(Firebase, $ionicLoading) {
    var apiService = this

    apiService.upload = function(imageData) {
      $ionicLoading.show({template: "Uploading..."})

      var firebaseConfig = {
        apiKey            : 'AIzaSyCdHv1W_zidG9Uexze3vpucoOJ0iPmBhq0',
        authDomain        : 'youper-challenge-upload.firebaseapp.com',
        projectId         : 'youper-challenge-upload',
        databaseURL       : 'https://youper-challenge-upload.firebaseio.com',
        storageBucket     : 'youper-challenge-upload.appspot.com',
        messagingSenderId : 'Y696596177056'
      }
      Firebase.initializeApp(firebaseConfig)

      var ref = Firebase.storage().ref().child("avatar.jpg")
      ref.putString(imageData, 'base64').then(function(snapshot) {
        $ionicLoading.hide()
      })
    }
  })