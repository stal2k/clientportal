(function ()
{
    'use strict';

    /**
     * Main module of the Fuse
     */
    angular
        .module('360iCP', [

            // Core
            'app.core',

            // Navigation
            'app.navigation',

            // Toolbar
            'app.toolbar',

            // Quick panel
            'app.quick-panel',

            // 360i Home
            'app.home',
			'app.seopulse',
			
			// Apps
            'app.dashboards',
            'app.calendar',
            'app.file-manager',
            'app.scrumboard',
			// 'app.scrumex',
            
            // Tools
            'app.tools',
        
            
        ]);
})();