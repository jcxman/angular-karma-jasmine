/**
 * Created by chenxin on 2/16/2016.
 */
describe("titleCase",function(){
    var $filter,filter;

    beforeEach(function(){
        module('filters');
        inject(function($injector){
            $filter = $injector.get('$filter');
            filter = $filter('titleCase');
        })
    });

    it("Should return undefined when undefined is passed in", function(){
        expect(filter(undefined)).toBeUndefined();
    });

    it("Should return null when null is passed in", function(){
        expect(filter(null)).toBeNull();
    });

    it("Should return a blank string when a blank string gis passed in", function(){
        expect(filter("")).toEqual("")
    });
    it("Should change the casing of lower cased word", function(){
        expect(filter("chenxin ji")).toEqual("Chenxin Ji")
    });
    it("Should change the casing of an upper case word", function(){
        expect(filter("CHENXIN JI")).toEqual("Chenxin Ji")
    });
    it("Should change the casing of random", function(){
        expect(filter("this IS a TEST")).toEqual("This Is A Test");
    });
    it("Should play nice with a normal phrase", function(){
        expect(filter("This is a normal phrase")).toEqual("This Is A Normal Phrase");
    });
});