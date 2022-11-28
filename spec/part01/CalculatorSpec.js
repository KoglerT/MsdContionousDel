const { add, subtract, multiply } = require("../../lib/calculator");

describe("calculator.add", () => {
it("returns 30", () => {
    var result = add(10, 20);
    expect(result).toBe(30);
    });
});

describe("calculator.subtract", () => {
    it("returns 20", () => {
        var result = subtract(30, 10);
        expect(result).toBe(20);
        });
    });

    describe("calculator.multiply", () => {
        it("returns 10", () => {
            var result = multiply(1, 10);
            expect(result).toBe(10);
            });
        });