import assert from "assert";
import countAllPaarl from "../countAllPaarl.js";

describe('The countAllPaarl function', function(){

    it('should take a parameter string with registration numbers and returns  the number of  registration numbers from Paarl.', function(){
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));
    });
    it('should take a parameter string with registration numbers and returns the number of registration numbers from Paarl.', function(){

        assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));
    });
});
