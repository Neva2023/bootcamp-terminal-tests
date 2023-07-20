import assert from "assert";
import isFromCapeTown from "../regCheck.js";

describe('The isFromCapeTown function', function(){

    it('should return true if a registration number is for Cape Town otherwise returns false.', function(){
        assert.equal(true, isFromCapeTown('CA 123 908'));
    });
    it('should returns true if a registration number is for Cape Town otherwise returns false.', function(){
        assert.equal(false, isFromCapeTown('CJ 123 908'));
    });
});