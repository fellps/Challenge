describe('Firebase Unit Tests', function(){
    var $firebase

    beforeEach(module('services.firebase'))
    beforeEach(module('firebase'))
    beforeEach(module('config'))

    beforeEach(inject(function (_$firebase_) {
        $firebase = _$firebase_
    }))

    it('can get an instance of my service', inject(function($firebase) {
        expect($firebase).toBeDefined()
    }))
})