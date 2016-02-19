/**
 * Created by chenxin on 2/19/2016.
 */
//Dessert.Services.factory('DessertServices',
angular.module("desserts.services",[]).factory('DessertServices',
    ['nsServiceExtensions',
        function(nsServiceExtensions){
            return {
                getRemotePies: function () {
                    return nsServiceExtensions.request({
                       url:"remote/pies",
                       method:"GET"
                    });
                }
            }
}]);