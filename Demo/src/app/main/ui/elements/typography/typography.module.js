(function ()
{
    'use strict';

    angular
        .module('app.ui.elements.typography', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.ui_elements_typography', {
            url      : '/ui/elements/typography',
            views    : {
                'content@app': {
                    templateUrl: 'app/main/ui/elements/typography/typography.html',
                    controller : 'TypographyController as vm'
                }
            },
            bodyClass: 'typography'
        });
    }

})();