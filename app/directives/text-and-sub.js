/**
 * Created by chenxin on 2/17/2016.
 */
angular.module('directives').directive("nsTextAndSub",
    function() {
        return {
            restrict :'E',
            templateUrl:'app/directives/text-and-sub.html',
            scope : {
                text : "@",
                sub: "@"
            },
            link : function(scope,element,attrs){

            }
        }
    }
);