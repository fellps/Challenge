angular.module('factory.localStorage', ['ionic'])
  .factory('$localStorage', ['$window', function($window) {
    return {
      set: function(key, value) {
        $window.localStorage[key] = value
      },
      get: function(key, defaultValue) {
        return $window.localStorage[key] || defaultValue
      },
      setObject: function(key, value) {
        if (value != undefined)
          $window.localStorage[key] = JSON.stringify(value)
      },
      getObject: function(key) {
        if($window.localStorage[key]){
          try{
            return JSON.parse($window.localStorage[key] || '{}')
          }catch (err){
            return undefined
          }
        } else {
          return undefined
        }
      },
      remove: function(key) {
        $window.localStorage.removeItem(key)
      }
    }
  }])