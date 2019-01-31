angular.module('templates', ['ionic'])

  .controller('TemplatesCtrl', function($scope, $ionicPopover, $state, $cordovaCamera) {

    $scope.imgURI = 'img/avatar.png';
    
    $ionicPopover.fromTemplateUrl('application/templates/popover.html', {
      scope: $scope
    }).then(function(popover) {
      $scope.popover = popover
    })

    $scope.getPicture = function () {
      var options = {
        quality: 75,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 300,
        targetHeight: 300,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false
      };

      $cordovaCamera.getPicture(options).then(function (imageData) {
          $scope.imgURI = "data:image/jpeg;base64," + imageData;
      }, function (err) {
        
      });
    }
  
    $scope.notification = function() {
      $state.go('app.notification')
      $scope.closePopover()
    }

    $scope.openPopover = function($event) {
      $scope.popover.show($event)
    }

    $scope.closePopover = function() {
      $scope.popover.hide()
    }

    //Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.popover.remove()
    })

    // Execute action on hide popover
    $scope.$on('popover.hidden', function() {
      // Execute action
    })
    
    // Execute action on remove popover
    $scope.$on('popover.removed', function() {
      // Execute action
    })
  })