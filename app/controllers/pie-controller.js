/**
 * Created by chenxin on 2/11/2016.
 */
angular.module('pie',[])
    .controller('PieController',['$scope','DessertManager',PieController]);

function PieController($scope,dessertManager){
    $scope.eatSlice = function() {
        if ($scope.slice){
            $scope.slice--;
        }
    };
    $scope.slice = 8;

    $scope.$on("pieHasBeenDepleted",function(){
       $scope.warning = "RED ALERT!";
        $scope.slice = 0;
    });

    function compareAndWarn(newVal,oldVal){
        var props = [];
        if( newVal && oldVal){
            for( var key in newVal){
                if ( newVal[key]>oldVal[key]){
                    props.push(key.charAt(0).toUpperCase()+key.slice(1));
                }
            }
        }
        return props;
    }

    $scope.$watch('nutritionalValue',function(newVal,oldVal){
        var props = compareAndWarn(newVal,oldVal);
        if(props && props.length){
            $scope.warning = props.join(", ") + " have gone up!";
        }else {
            $scope.warning = null;
        }
    },true);//deep watch

    $scope.toggleMode = function(){
        if (dessertManager.mode() === 'pie'){
            dessertManager.mode("cake");
        }  else {
            dessertManager.mode("pie");
        }
    };

    this.requestFlavor = function( flavor){
        $scope.lastRequestedFlavor = flavor;
    };

    $scope.lastRequestedFlavor;
    $scope.nutritionalValue = {calories:500, fat: 200, carbs:100};
    $scope.warning = null;
    $scope.slices = 8;


}