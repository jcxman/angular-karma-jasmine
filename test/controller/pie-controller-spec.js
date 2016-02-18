/**
 * Created by chenxin on 2/11/2016.
 */
describe("PieController",function(){
    var $rootScope,
        $scope,
        controller;

    beforeEach(function(){
        module("pie");

        inject(function($injector){
            $rootScope = $injector.get("$rootScope");
            $scope = $rootScope.$new();
            controller = $injector.get('$controller')("PieController",{$scope :$scope});
        })
    });

    describe("Action Handlers",function(){
       describe("eatSlice",function(){
           it("Should decrement the number of slices",function(){
              expect($scope.slice).toEqual(8);
               $scope.eatSlice();
               expect($scope.slice).toEqual(7);
           });

           it("Should do nothing when slices is 0" , function(){
               $scope.slice = 0;
               $scope.eatSlice();
               expect($scope.slice).toEqual(0);
           });
       });

       describe("requestFlavor",function(){
          it("Should set $scope.lastRequestFlavor to the passed in argument", function(){
              controller.requestFlavor("Cherry");
              expect($scope.lastRequestedFlavor).toEqual("Cherry");
          }) ;
       });
    });

    describe("Initailization", function(){
        it("Should instantiate slices to 89",function(){
            expect($scope.slice).toEqual(8);
        })
    });

    describe("Watchers",function(){
       beforeEach(function(){
          $scope.$digest();
       });
       describe("nutritionalValue",function(){
           it("Should set the warning that Carbs have gone up, when only carbs go up", function(){
               $scope.nutritionalValue.carbs ++;
               $scope.$digest();
               expect($scope.warning).toEqual("Carbs have gone up!");
           }) ;
           it("Should set the warning that fat have gone up, when only carbs go up", function(){
               $scope.nutritionalValue.fat ++;
               $scope.$digest();
               expect($scope.warning).toEqual("Fat have gone up!");
           }) ;
           it("Should set the warning that calories have gone up, when only carbs go up", function(){
               $scope.nutritionalValue.calories ++;
               $scope.$digest();
               expect($scope.warning).toEqual("Calories have gone up!");
           }) ;
           it("Should set the warning that a combination has gone up, when only carbs go up", function(){
               $scope.nutritionalValue.carbs ++;
               $scope.nutritionalValue.fat ++;
               $scope.nutritionalValue.calories ++;
               $scope.$digest();
               expect($scope.warning).toEqual("Calories, Fat, Carbs have gone up!");
           }) ;
           it("Should set the warning to null if nothing goes up", function(){
                expect($scope.warning).toBeNull();
           }) ;
           it("Should set the warning to null if nothing has gone up, even if some things", function(){
               $scope.nutritionalValue.carbs--;
               $scope.nutritionalValue.fat--;
               $scope.nutritionalValue.calories--;
               $scope.$digest();
               expect($scope.warning).toBeNull();
           }) ;
       });

    });

    describe("Initailization", function(){
       it("Should instantiate nutritionalValue to its default", function () {
            expect($scope.nutritionalValue).toEqual({calories:500,fat:200,carbs:100});
       }) ;
       it("Should instantiate warning to null", function () {
            expect($scope.warning).toBeNull();
       }) ;
       it("Should instantiate slices to 8", function () {
           expect($scope.slices).toEqual(8);
       }) ;
       it("Should instantiate $scope.lastRequestFlavor", function () {
           expect($scope.lastRequestedFlavor).toBeUndefined();
       }) ;
    });
});