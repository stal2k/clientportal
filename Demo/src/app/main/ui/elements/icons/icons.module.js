(function ()
{
    'use strict';

    angular
        .module('app.ui.elements.icons', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.ui_elements_icons', {
            url      : '/ui/elements/icons',
            views    : {
                'content@app': {
                    templateUrl: 'app/main/ui/elements/icons/icons.html',
                    controller : 'IconsController as vm'
                }
            },
            resolve  : {
                Icons: function (apiResolver)
                {
                    return apiResolver.resolve('icons@get');
                }
            },
            bodyClass: 'icons'
        });
    }

})();