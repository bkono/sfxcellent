angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('SoundboardCtrl', function($scope, $window, viewTitle, sounds) {
  $scope.model = model = {};
  $scope.viewTitle = viewTitle;
  model.sounds = sounds;

  $scope.play = function(sound) {
    if ($scope.media) {
      $scope.media.pause();
    }

    if ($window.cordova) {
      playOnDevice(sound);
    } else {
      playInBrowser(sound);
    }


    if ($window.cordova) {
      ionic.Platform.ready(function() {
        if (ionic.Platform.is('android')) {
          src = '/android_asset/www/' + src;
        }
      });
    }
  };

  playInBrowser = function(sound) {
    $scope.media = new Audio();
    $scope.media.src = sound.src;
    $scope.media.load();
    $scope.media.play();
  }

  playOnDevice = function(sound) {
    $scope.media = new $window.Media(srcForSound(sound));
    $scope.media.play();
  }

  srcForSound = function(sound) {
    src = sound.src;
    ionic.Platform.ready(function() {
      if (ionic.Platform.is('android')) {
        src = '/android_asset/www/' + src;
      }
      return src;
    });
  }
});
