angular.module('templates', ['ionic'])

  .controller('TemplatesCtrl', function($scope, $ionicPopover, $state, $cordovaCamera, $cordovaFileTransfer, $localStorage, $imgurApi, api) {

    api.get("notification", function(result) {
      var code = $localStorage.getObject(result.data.code)
      if (code === undefined) {
        $localStorage.setObject(result.data.code, {
          title: result.data.title, 
          summary: result.data.summary,
          body: result.data.body, 
          clicked: false
        })
        updatePopover(result.data)
      } else if (!code.clicked) {
        updatePopover(result.data)
      }
    })

    $scope.imgURI = 'img/avatar.png'

    $scope.goHome = function () {
      $state.go('app.home')
    }

    $scope.getPicture = function () {
      var options = {
        // quality: 75,
        // destinationType: Camera.DestinationType.DATA_URL,
        // sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
        // allowEdit: true,
        // encodingType: Camera.EncodingType.JPEG,
        // targetWidth: 100,
        // targetHeight: 100,
        // popoverOptions: CameraPopoverOptions,
        // saveToPhotoAlbum: false
      }

      uploadPicture(options)
    }

    $ionicPopover.fromTemplateUrl('application/templates/popover.html', {
      scope: $scope
    }).then(function(popover) {
      $scope.popover = popover
    })
  
    $scope.notification = function(code) {
      $scope.closePopover()
      $state.go('app.notification')
      var data = $localStorage.getObject(code)
      if (data !== undefined) {
        data.clicked = true
        $localStorage.setObject(code, data)
        $scope.code = undefined
      }
    }

    $scope.openPopover = function($event) {
      if ($scope.code !== undefined)
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

    function updatePopover(data) {
      $scope.code = data.code
      $scope.title = data.title
      $scope.summary = data.summary
      $scope.body = data.body
      
      var createdAt = new Date(data.createdAt)
      var diffMs = (new Date() - createdAt);
      var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000);

      $scope.diffMins = diffMins
    }

    function uploadPicture(options) {

      var imageData = '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'
      $imgurApi.upload(imageData)

      // $cordovaCamera.getPicture(options).then(function (imageData) {
      //   $scope.imgURI = "data:image/jpegbase64," + imageData
      //   $localStorage.set("avatar", $scope.imgURI)

      //   $imgurApi.upload(imageData)
      // }, function (err) {
      //   console.log('error: ' + err);
      // })
    }
  })