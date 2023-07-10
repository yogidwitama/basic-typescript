"use strict";
describe('Name of the group', () => {
    it("sholud be application union", () => {
        const process = (value) => {
            if (typeof value === "string") {
                return value.toUpperCase();
            }
            else if (typeof value === "number") {
                return value + 2;
            }
            else {
                return !value;
            }
        };
        expect(process("yogi")).toBe("YOGI");
        expect(process(100)).toBe(102);
        expect(process(true)).toBe(false);
    });
});
