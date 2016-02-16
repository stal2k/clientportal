(function ()
{
    'use strict';

    angular
        .module('app.ui.elements.material-colors', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.ui_elements_material-colors', {
            url  : '/ui/elements/material-colors',
            views: {
                'content@app': {
                    templateUrl: 'app/main/ui/elements/material-colors/material-colors.html',
                    controller : 'MaterialColorsController as vm'
                }
            }
        });
    }

})();