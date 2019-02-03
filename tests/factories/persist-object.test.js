describe('Persist Object Unit Tests', function(){
    var $persistObject

    beforeEach(module('factory.persistObject'))

    beforeEach(inject(function (_$persistObject_) {
        $persistObject = _$persistObject_
    }))

    it('can get an instance of my factory', inject(function($persistObject) {
        expect($persistObject).toBeDefined()
    }))

    it('should have an set function', inject(function($persistObject) {
      expect($persistObject.set).toBeDefined()
    }))

    it('should have an get function', inject(function($persistObject) {
      expect($persistObject.get).toBeDefined()
    }))

    it('should set and get a value', inject(function($persistObject) {
      $persistObject.set('key', 'value')
      expect($persistObject.get('key')).toEqual('value')
    }))
})