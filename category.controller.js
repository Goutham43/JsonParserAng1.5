(function() {
    'use strict';

    angular.module('xfinity')
        .controller('CategoryController', CategoryController);

    CategoryController.$inject = ['JsonService'];

    function CategoryController(JsonService) {
        var catDataVm = this;

        init();

        function init() {

            catDataVm.sorter = {
                sortBy: 'amount',
                sortOrder: false
            };

            JsonService.getData()
                .then(function(data) {
                    catDataVm.users = data;
                    catDataVm.out = [];
                    catDataVm.final = [];
                    for (let a of catDataVm.users) {
                        if (catDataVm.out.indexOf(a.name) === -1) {
                            catDataVm.out.push(a.name);
                        }
                    }
                    //loop through the unique names!
                    for (let a of catDataVm.out) {
                        let obj = {};
                        //filter the object for a particular name
                        for (let j of catDataVm.users.filter(function(x) {
                            return x.name === a
                        })) {
                            //merge the objects `category` and `amount` as a object
                            Object.assign(obj, {
                                [j.category]: j.amount
                            });
                        }
                        //finally push it to the final list that is `final`
                        let temp = {
                            name: a
                        };
                        Object.assign(temp, obj);
                        catDataVm.final.push(temp);
                    }
                    console.log(catDataVm.final);
                    // catDataVm.newUsers.push({"name": catDataVm.users[key].name, "C1": catDataVm.users[key].amount,"C2": catDataVm.users[key].amount, "C3": catDataVm.users[key].amount})
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
    }
})();