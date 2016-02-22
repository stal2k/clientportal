/* (function ()
{
    'use strict';

*/
angular.module('login')
    .controller('LoginModalCtrl', LoginModalCtrl)
    .service('loginService', loginService)
    .service('loginModal', loginModal);

function LoginModalCtrl($scope, $mdDialog, loginService) {
    $scope.cancel = function() {
        $mdDialog.cancel('cancel!!');
    };
    $scope.submit = function(email, password) {
        loginService.login($scope.user, function(error, user) {
            if (error) {
                $scope.error = error;
            } else {
                $mdDialog.hide(user);
            }
        });
    };
}

function loginService($rootScope, $http, store, jwtHelper) {

    return {
        login: login,
        logout: logout
    };

    function login(user, callback) {
        $http({
            url: 'http://localhost:3001/sessions/create',
            method: 'POST',
            data: user
        }).then(function(response) {
            $rootScope.jwt = response.data.id_token;
            store.set('jwt', response.data.id_token);
            callback(null, jwtHelper.decodeToken(response.data.id_token));
        }, function(error) {
            console.log(error);
            callback(error, null);
        });
    }

    function logout(user, callback) {
        delete $rootScope.jwt;
        store.remove('jwt');
        delete $rootScope.currentUser;
    }
}

function loginModal($rootScope, $mdDialog) {
    function assignCurrentUser(user) {
        $rootScope.currentUser = user;
        return user;
    }
    return function() {
        var instance = $mdDialog.show({
            templateUrl: 'app/core/layouts/content-only.html',
            controller: 'LoginModalCtrl'
        });
        return instance.then(assignCurrentUser);
    };
}

