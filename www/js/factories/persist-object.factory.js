/**
 * This factory is used to transmit data between screens
 */

angular.module('factory.persistObject', [])
  .factory('$persistObject', function () {

  var persistObject = []

  return {
    set: function (objectName, data) {
      persistObject[objectName] = data
    },
    get: function (objectName) {
      return persistObject[objectName]
    }
  }
})