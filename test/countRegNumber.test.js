import assert from "assert";
import countRegNumber from "../countRegNumber.js";

describe('The countRegNumber function', function(){

    it('should take in a string parameter and returns the number of registration numbers in the string', function(){
        assert.equal(3, countRegNumber('CA 182736,CY 523519,CJ 812328'));
    });
    it('should should take in a string parameter and returns the number of registration numbers in the string', function(){
        assert.equal(1, countRegNumber('CA 182736'));
    });
});

