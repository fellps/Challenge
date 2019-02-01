angular.module('templates', ['ionic'])

  .controller('TemplatesCtrl', function($scope, $ionicPopover, $state, $cordovaCamera, $cordovaFileTransfer, $localStorage, api) {

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
      $cordovaCamera.getPicture(options).then(function (imageData) {
        $scope.imgURI = "data:image/jpegbase64," + imageData
        $localStorage.set("avatar", $scope.imgURI)

        var server = apiURL + '/uploads.json?' + apiKey + "&api_username=" + $rootScope.user.user.username;
  
        var options = {
          file: imageData,
          filename: imageData.substr(imageData.lastIndexOf('/')+1)
        };

        var trustAllHosts = true;
        
        $cordovaFileTransfer.upload(encodeURI(server), imageData, options, trustAllHosts)
          .then(function(result) {
            console.log('success: ' + result);
          },
          function(err) {
            console.log('error: ' + err);
          },
          function (progress) {

          });
      }, function (err) {
        console.log('error: ' + err);
      })
    }
  })