var assert = require("assert");
var average = require("../average");

describe("Average", function() {
    describe("#findAverage()", function() {
        it("should return the average of an array of numbers", function() {
            assert.deepEqual(findAverage([1, 2, 3]), 2, "must return average of the numbers in the array");
        });
        it("should return 'input must be an array' if input is not an array", function() {
            assert.equal(findAverage("A string"), "input must be an array", "must return 'input must be an array' if given a string");
        })
    });
});
