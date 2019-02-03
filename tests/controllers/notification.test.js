const mockNotification = {
  code: '1',
  title: 'title',
  summary: 'summary',
  body: 'body',
  diffMins: 0
}

describe('NotificationCtrl Unit Tests', function(){
    var $controller,
        $scope,
        $state,
        $persistObject

    // Load the controller's module
    beforeEach(module('controllers.notification'))
    beforeEach(module('factory.persistObject'))
    beforeEach(module('ui.router'))

    beforeEach(inject(function(_$persistObject_) {
      _$persistObject_.set('notification', mockNotification)
    }))

    // Dependency injection
    beforeEach(inject(function(_$rootScope_, _$state_, _$controller_, _$persistObject_) {
      $scope = _$rootScope_.$new()
      $state = _$state_
      $persistObject = _$persistObject_
      $controller = _$controller_('NotificationCtrl', {$scope: $scope, $state: $state, $persistObject: $persistObject})
    }))

    it('should exist', function() {
      expect($controller).toBeDefined()
    })
    
    it('should have an goHome function', function() {
      expect($scope.goHome).toBeDefined()
    })

    it('should have data property equals to mockNotification', function() {
      expect($scope.data).toEqual(mockNotification)
    })
})