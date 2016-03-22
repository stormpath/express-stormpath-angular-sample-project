'use strict';

angular.module('exampleApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('change', {
        url: '/change?sptoken',
        template: require('./change-password.html')
      });
  });
