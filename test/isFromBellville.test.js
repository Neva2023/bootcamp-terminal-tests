import assert from "assert";
import isFromBellville from "../isFromBellville.js";

describe('The isFromBellville function', function(){

    it('should return true if a registration number is for Bellville otherwise returns false.', function(){
        assert.equal(true, isFromBellville('CY 123'));
    });
    it('should return true if a registration number is for Bellville otherwise returns false', function(){

        assert.equal(false, isFromBellville('CJ 123'));
    });
});

