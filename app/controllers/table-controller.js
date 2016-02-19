/**
 * Created by chenxin on 2/19/2016.
 */
Dessert.Controllers.controller("TableController",
    ['$scope','DessertService',
        function($scope,dessertService){
            $scope.setTable = function(){
                dessertService.getRemotePies().then(function(result){
                    $scope.pies = result;
                });
            };
            $scope.pies = null;
        }]
);