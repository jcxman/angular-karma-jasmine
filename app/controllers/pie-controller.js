/**
 * Created by chenxin on 2/11/2016.
 */
angular.module('pie',[])
    .controller('PieController',['$scope',PieController]);

function PieController($scope){
    $scope.eatSlice = function() {
        if ($scope.slice){
            $scope.slice--;
        }
    };
    $scope.slice = 8;

}