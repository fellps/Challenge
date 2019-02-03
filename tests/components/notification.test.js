describe('NotificationComponentCtrl Unit Tests', function() {
    var $scope,
        $ionicPopover,
        $state,
        $localStorage,
        $persistObject,
        $api,
        $controller

    // Load the ui router module
    beforeEach(module('components.notification'))
    beforeEach(module('factory.localStorage'))
    beforeEach(module('factory.persistObject'))
    beforeEach(module('service.api'))
    beforeEach(module('ui.router'))

    // Dependency injection
    beforeEach(inject(function(_$rootScope_, _$ionicPopover_, _$state_, _$localStorage_, _$persistObject_, _$api_, _$controller_) {
      $scope = _$rootScope_.$new()
      $ionicPopover = _$ionicPopover_
      $state = _$state_
      $localStorage = _$localStorage_
      $persistObject = _$persistObject_
      $api = _$api_
      $controller = _$controller_

      $controller = _$controller_('NotificationComponentCtrl', {
        $scope: $scope, 
        $ionicPopover: $ionicPopover, 
        $state: $state, 
        $localStorage: $localStorage, 
        $persistObject: $persistObject, 
        $api: $api
      })
    }))
})