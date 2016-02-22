/* (function ()
{
    'use strict';

    angular
        .module('app.service', [])
        .config(config);
*/
    /** @ngInject */

// LoginModalCtrl.js

	app.controller('LoginModalCtrl', function ($scope, UsersApi) {

	this.cancel = $scope.$dismiss;

	this.submit = function (email, password) {
		UsersApi.login(email, password).then(function (user) {
		$scope.$close(user);
    });
  };

});