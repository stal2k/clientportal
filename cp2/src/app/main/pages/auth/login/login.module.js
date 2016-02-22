(function ()
{
    'use strict';

    angular
        .module('app.pages.auth.login', [])
        .config(config)
		.service('AuthService', AuthService);
		
    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider.state('app.pages_auth_login', {
            url      : '/pages/auth/login',
            views    : {
                'main@'                       : {
                    templateUrl: 'app/core/layouts/content-only.html',
                    controller : 'MainController as vm'
                },
                'content@app.pages_auth_login': {
                    templateUrl: 'app/main/pages/auth/login/login.html',
                    controller : 'LoginController as vm'
                }
            },
            bodyClass: 'login'
        });

		// Login Service WIP
		
	AuthService:
	{
    loggedIn: false,
    checkStatus: function ()
    {
        /* Check user's login status from API server */
    },

    login: function ()
    {
        /* Do the login */
        // If login success
        this.loggedIn = true
    },

    logout: function ()
    {
        /* Do the logout */
        // If logout success
        this.loggedIn = false
    }
	}
        // Translation
        $translatePartialLoaderProvider.addPart('app/main/pages/auth/login');

        // Navigation
        msNavigationServiceProvider.saveItem('pages.auth', {
            title : 'Authentication',
            icon  : 'icon-lock',
            weight: 1
        });

        msNavigationServiceProvider.saveItem('pages.auth.login', {
            title : 'Login',
            state : 'app.pages_auth_login',
            weight: 1
        });
    }

})();