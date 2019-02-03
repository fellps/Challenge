describe('API Unit Tests', function(){
    var $api

    beforeEach(module('services.api'))
    beforeEach(module('config'))

    beforeEach(inject(function (_$api_) {
        $api = _$api_
    }))

    it('can get an instance of my service', inject(function($api) {
        expect($api).toBeDefined()
    }))

    it('should have an get function', inject(function($api) {
      expect($api.get).toBeDefined()
    }))
})