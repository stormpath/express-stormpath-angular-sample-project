'use strict';

angular.module('exampleApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('profile', {
        url: '/profile',
        templateUrl: 'profile/profile.html',
        controller: 'ProfileCtrl',
        sp: {
          authenticate: true
        }
      });
  })
  .controller('ProfileCtrl', function ($scope, $http, $timeout) {
    $scope.saving = false;
    $scope.saved = false;
    $scope.error = null;
    $scope.formModel = {
      givenName: $scope.user.givenName,
      surname: $scope.user.surname,
      favoriteColor: $scope.user.customData.favoriteColor
    };

    $scope.submit = function() {
      $scope.error = null;
      $scope.saving = true;
      $http.post('/profile',$scope.formModel)
        .then(function(){
          $scope.saved = true;
          $timeout(function(){
            $scope.saved = false;
          },2000);
        })
        .catch(function(httpResponse){
          $scope.error = httpResponse &&
            httpResponse.data &&
            httpResponse.data.userMessage ||
            httpResponse.data.message ||
            'Unknown server error';
        })
        .finally(function(){
          $scope.saving = false;
        });
    };
  });