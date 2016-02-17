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
    });

    describe("Initailization", function(){
        it("Should instantiate slices to 89",function(){
            expect($scope.slice).toEqual(8);
        })
    })

});