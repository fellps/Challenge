describe('AvatarCtrl Unit Tests', function(){
    var $scope,
        $localStorage,
        $controller

    // Load the ui router module
    beforeEach(module('components.avatar'))
    beforeEach(module('factory.localStorage'))
    beforeEach(module('ngCordova'))
    beforeEach(module('firebase'))

    // Dependency injection
    beforeEach(inject(function(_$rootScope_, _$localStorage_, _$firebase_, _$controller_) {
      $scope = _$rootScope_.$new()
      $localStorage = _$localStorage_
      $controller = _$controller_('AvatarCtrl', {$scope: $scope, $localStorage: $localStorage})
    }))
    
    it('should exist', function() {
      expect($controller).toBeDefined()
    })

    it('should have an getPicture function', function() {
      expect($scope.getPicture).toBeDefined()
    })
})