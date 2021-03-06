(function () {
    'use strict';

    angular.module('fleio')
        .factory('PluginsTicketsTicketsApi', PluginsTicketsTicketsApi);

    PluginsTicketsTicketsApi.$inject = ['FlResourceService', 'CONFIG'];
    function PluginsTicketsTicketsApi(FlResourceService, CONFIG) {
        return FlResourceService(CONFIG.api_url + "/plugins/tickets/tickets/:id/:action", {
            id: '@id',
            action: '@action'
        });
    }

})();
