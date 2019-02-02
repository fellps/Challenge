angular.module('components.notification', [])

  .component('notification', {
    templateUrl: 'app/components/notification/notification.html',
    controller: 'NotificationComponentCtrl as ctrl',
    bindings: {
    }
  })

  .controller('NotificationComponentCtrl', function($scope, $ionicPopover, $state, $localStorage, $persistObject, $api) {
    
    // Search for notifications
    $api.get("notification", function(result) {
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

    // Set popover template
    $ionicPopover.fromTemplateUrl('app/templates/popover.html', {
      scope: $scope
    }).then(function(popover) {
      $scope.popover = popover
    })
  
    // On click in notification
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

    // Execute action on open popover
    $scope.openPopover = function($event) {
      if ($scope.code !== undefined)
        $scope.popover.show($event)
    }

    // Execute action on close popover
    $scope.closePopover = function() {
      $scope.popover.hide()
    }

    // Execute action on destroy popover
    $scope.$on('$destroy', function() {
      $scope.popover.remove()
    })

    // Execute action on hide popover
    $scope.$on('popover.hidden', function() {

    })
    
    // Execute action on remove popover
    $scope.$on('popover.removed', function() {

    })

    // Update popover data
    function updatePopover(data) {
      $scope.code = data.code
      $scope.title = data.title
      $scope.summary = data.summary
      $scope.body = data.body
      
      var createdAt = new Date(data.createdAt)
      var diffMs = (new Date() - createdAt);
      var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000);

      $scope.diffMins = diffMins

      $persistObject.set('notification', data)
    }
  })
