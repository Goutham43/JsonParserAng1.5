(function() {
    'use strict';

    angular
        .module('xfinity', ['ngMessages', 'ngRoute'])
        .config(moduleConfig)
        .run(moduleRun);

    moduleConfig.$inject = ['$routeProvider'];

    function moduleConfig($routeProvider) {
        $routeProvider
            .when('/json-data', {
                templateUrl: 'json-data.tmpl.html',
                controller: 'JsonDataController',
                controllerAs: 'jsonDataVm'
            })
            .when('/cat-data', {
                templateUrl: 'category.tmpl.html',
                controller: 'CategoryController',
                controllerAs: 'catDataVm'
            })
            .otherwise({
                redirectTo: '/json-data'
            });

    }

    function moduleRun() {
        console.log('App Started');
    }

})();