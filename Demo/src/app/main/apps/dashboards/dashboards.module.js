(function ()
{
    'use strict';

    angular
        .module('app.dashboards', [
            'app.dashboards.project',
            'app.dashboards.server',
            'app.dashboards.analytics'
        ])
        .config(config);

    /** @ngInject */
    function config(msNavigationServiceProvider)
    {
        // Navigation
        msNavigationServiceProvider.saveItem('apps', {
            title : 'APPS',
            group : true,
            weight: 1
        });

        msNavigationServiceProvider.saveItem('apps.dashboards', {
            title : '360i Sample Dashboards',
            icon  : 'icon-tile-four',
            weight: 1
        });

        msNavigationServiceProvider.saveItem('apps.dashboards.project', {
            title: 'Exec Samples',
            state: 'app.dashboards_project'
        });

        msNavigationServiceProvider.saveItem('apps.dashboards.server', {
            title: 'Technical Dash',
            state: 'app.dashboards_server'
        });

        msNavigationServiceProvider.saveItem('apps.dashboards.analytics', {
            title: 'Analytics',
            state: 'app.dashboards_analytics'
        });
    }

})();