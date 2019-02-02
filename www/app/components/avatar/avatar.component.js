angular.module('components.avatar', [])

  .component('avatar', {
    templateUrl: 'app/components/avatar/avatar.html',
    controller: 'AvatarCtrl as ctrl',
    bindings: {
    }
  })

  .controller('AvatarCtrl', function($scope, $localStorage, $cordovaCamera, $firebase) {

    // Open photo library
    $scope.getPicture = function () {
      var options = {
        quality: 75,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 100,
        targetHeight: 100,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false
      }

      updateAndUploadPicture(options)
    }

    // Update avatar and upload picture to Firebase
    function updateAndUploadPicture(options) {
      $cordovaCamera.getPicture(options).then(function (imageData) {
        $scope.imgURI = "data:image/jpeg;base64," + imageData
        $localStorage.set("avatar", $scope.imgURI)
        $firebase.upload(imageData)
      }, function (err) {
        console.log('error: ' + err);
      })
    }
  })