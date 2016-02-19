/**
 * Created by chenxin on 2/19/2016.
 */
spyOnAngularService = function(service,methodName,result){
    return spyOn(service,methodName).and.returnValue({then:function(fn){
        fn(result);
    }});
};

spyOnAngularServiceError = function(services,methodName,result){
    return spyOn(service,methodName).and.returnValue({then:function(fn,errorfn){
        errorfn(result)
    }});
};