import assert from "assert";
import fromWhere from "../fromWhere.js";

describe('The fromWhere function', function(){

    it('should return the town the car is from.', function(){
        assert.equal('Bellville', fromWhere('CY 567489'));
    });
    it('should return the town the car is from.', function(){
        assert.equal('Paarl', fromWhere('CJ 343502'));
    });
    it('should return the town the car is from.', function(){
        assert.equal('Cape Town', fromWhere('CA 987504'));
    });
    it('should return the town the car is from.', function(){
        assert.equal('Some other place!', fromWhere('ZN 568593'));
    });
});
