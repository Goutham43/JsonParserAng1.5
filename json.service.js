(function(){
    'use strict';

    angular.module('xfinity')
        .service('JsonService', JsonService);

    JsonService.$inject = ['$http', '$q'];

    function JsonService($http, $q) {
        var self = this;

        self.getData = getData;

        function getData() {
            return $http.get('./data.json')
                .then(successFn, errorFn);
        }

        function successFn(response) {
            return response.data;
        }

        function errorFn(error) {
            return $q.reject(error.status);
        }
    }

})();