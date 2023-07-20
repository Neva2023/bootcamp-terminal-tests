import assert from "assert";
import yearsAgo from "../yearsAgo.js";

describe('The yearsAgo function', function(){

    it('should take in a year and return how many years ago that year is from the current year.', function(){
        assert.equal(27, yearsAgo(1996));
    });
    it('should take in a year and return how many years ago that year is from the current year.', function(){
        assert.equal(21, yearsAgo(2002));
    });
});

