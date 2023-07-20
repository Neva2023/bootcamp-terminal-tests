import assert from "assert";
import transportFee from "../transportFee.js";

describe('The transportFee function', function(){

    it('should return the right transport fee based on the shift', function(){
        assert.equal('R10', transportFee('afternoon'));
    });
    it('should return the right transport fee based on the shift', function(){
        assert.equal('R20', transportFee('morning'));
    });
    it('should return the right transport fee based on the shift', function(){
        assert.equal('free', transportFee('night'));
    });
});
