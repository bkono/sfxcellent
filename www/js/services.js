angular.module('starter.services', [])

.factory('Sounds', function() {
  // Source these from somewhere, later. Or allow remote updating?
  var _halloween = [
    {title: 'Scream 1', src: '/sounds/scream-1.wav'}
  ]

  var _sciFi = [
    {title: 'Future Scream', src: '/sounds/scream-1.wav'}
  ]

  var _sounds = {
    'halloween': _halloween,
    'sci-fi': _sciFi
  }
  
  return {
    getSoundCategory: getSoundCategory
  }

  function getSoundCategory(category) {
    return _sounds[category]
  };

});
