describe('LocalStorage Unit Tests', function(){
    var $localStorage

    beforeEach(module('factory.localStorage'))

    beforeEach(inject(function (_$localStorage_) {
        $localStorage = _$localStorage_
    }))

    it('can get an instance of my factory', inject(function($localStorage) {
        expect($localStorage).toBeDefined()
    }))

    it('should have an set function', inject(function($localStorage) {
      expect($localStorage.set).toBeDefined()
    }))

    it('should have an get function', inject(function($localStorage) {
      expect($localStorage.get).toBeDefined()
    }))

    it('should have an setObject function', inject(function($localStorage) {
      expect($localStorage.setObject).toBeDefined()
    }))

    it('should have an getObject function', inject(function($localStorage) {
      expect($localStorage.getObject).toBeDefined()
    }))

    it('should have an remove function', inject(function($localStorage) {
      expect($localStorage.remove).toBeDefined()
    }))

    it('should set and get a value', inject(function($localStorage) {
      $localStorage.set('key', 'value')
      expect($localStorage.get('key')).toEqual('value')
    }))

    it('should set and get an object', inject(function($localStorage) {
      var obj = {'key':'value'}
      $localStorage.setObject('obj', obj)
      expect($localStorage.getObject('obj')).toEqual(obj)
    }))

    it('should set and remove a value', inject(function($localStorage) {
      $localStorage.set('key1', 'value')
      $localStorage.remove('key1')
      expect($localStorage.get('key1')).toEqual(undefined)
    }))
})