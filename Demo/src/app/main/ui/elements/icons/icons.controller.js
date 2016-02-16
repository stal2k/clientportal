(function ()
{
    'use strict';

    angular
        .module('app.ui.elements.icons')
        .controller('IconsController', IconsController);

    /** @ngInject */
    function IconsController(Icons)
    {
        var vm = this;

        // Data
        vm.icons = Icons.icons;

        // Methods

        //////////
    }

})();