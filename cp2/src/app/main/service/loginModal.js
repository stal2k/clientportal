 (function ()
{
    'use strict';

    angular
        .module('app.loginModal', [])
        .config(config);

    /** @ngInject */

// loginModal.js login service

	app.loginModal('loginModal', function ($modal, $rootScope) {

	function assignCurrentUser (user) {
		$rootScope.currentUser = user;
		return user;
  }

	return function() {
		var instance = $modal.open({
			templateUrl: 'app/core/layouts/content-only.html',
			controller: 'LoginModalCtrl',
			controllerAs: 'LoginModalCtrl'
    })

    return instance.result.then(assignCurrentUser);
  };

});