import assert from "assert";
import isWeekday from "../isWeekday.js";

describe('The isWeekday function', function(){

    it('should  find out if the parameter passed in is a day of the week and not a weekend day.', function(){
        assert.equal(true, isWeekday('Monday'));
    });
    it('should  find out if the parameter passed in is a day of the week and not a weekend day.', function(){
        assert.equal(false, isWeekday('Sunday'));
    });
});
