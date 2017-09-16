(function() {
    'use strict';

    angular.module('xfinity')
        .controller('JsonDataController', JsonDataController);

    JsonDataController.$inject = ['JsonService'];

    function JsonDataController(JsonService) {
        var jsonDataVm = this;

        init();

        function init() {

            jsonDataVm.sorter = {
                sortBy: 'amount',
                sortOrder: false
            };

            JsonService.getData()
                .then(function(data) {
                    jsonDataVm.users = data;
                    console.log(jsonDataVm.users);
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
    }
})();