///**
// * Created by chenxin on 2/19/2016.
// */
//describe("TableController",function(){
//   var $rootScope,
//       $scope,
//       dessertServiceSpy,
//       controller;
//
//    beforeEach(function(){
//        //module.apply(module,Dessert.Dependencies);
//        module("pie",'desserts','desserts.services','directives');
//
//        inject(function($injector){
//            $rootScope = $injector.get('$rootScope');
//            $scope = $rootScope.$new();
//            dessertServiceSpy =spyOnAngularService($injector.get('DessertService'),'getRemotePies',{name:"This is a pie!"});
//            controller = $injector.get('$controller')("TableController",{$scope:$scope});
//        })
//    });
//
//    describe("Action Handlers", function(){
//       it("Should call the dessertService.getRemotePies method", function(){
//
//       }) ;
//       it("Should set the pies to the result of the service call", function(){
//
//       }) ;
//
//    });
//
//    describe("Initialization", function(){
//       it("Should instantiate pies to null", function(){
//
//       });
//
//    });
//});