angular.module('controllers.notification', [])

  .controller('NotificationCtrl', function($scope, $state, $persistObject) {

    // Loads data to display on the screen
    $scope.data = $persistObject.get('notification')

    // Go home
    $scope.goHome = function () {
      $state.go('app.home')
    }
  })