import assert from "assert";
import countAllFromTown from "../countAllFromTown.js";

describe('The countAllFromTown function', function(){

    it('should return the number of registration numbers in the string that is for that town.', function(){
        assert.equal(3, countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'));
    });
    it('should greet Karen correctly', function(){
        assert.equal(1, countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF'));
    });
});

