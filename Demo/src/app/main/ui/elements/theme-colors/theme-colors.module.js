(function ()
{
    'use strict';

    angular
        .module('app.ui.elements.theme-colors', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.ui_elements_theme-colors', {
            url      : '/ui/elements/theme-colors',
            views    : {
                'content@app': {
                    templateUrl: 'app/main/ui/elements/theme-colors/theme-colors.html',
                    controller : 'ThemeColorsController as vm'
                }
            },
            bodyClass: 'theme-colors'
        });
    }

})();