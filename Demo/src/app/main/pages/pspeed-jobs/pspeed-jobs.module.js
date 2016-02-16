(function ()
{
    'use strict';

    angular
        .module('app.pages.pspeed-jobs', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.pages_pspeed_jobs', {
            url    : '/pages/pspeed-jobs',
            views  : {
                'content@app': {
                    templateUrl: 'app/main/pages/pspeed-jobs/pspeed-jobs.html',
                    controller : 'PspeedJobsController as vm'
                }
            },
            resolve: {
                Jobs: function (apiResolver)
                {
                    return apiResolver.resolve('pspeedjobs.pspeedjobs@get');
                }
            }
        });
    }

})();