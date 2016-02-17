/**
 * Created by chenxin on 2/16/2016.
 */
angular.module('filters',[])
    .filter('titleCase',function(){
       return function (val) {
           return val? val.replace(/\w\S*/g,function(txt){
               return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
           }) : val;
       }
    });