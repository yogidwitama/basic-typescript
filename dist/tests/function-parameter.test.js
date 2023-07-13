"use strict";
describe('Function', () => {
    it("Should support in typescript", () => {
        const sayHello = (name) => {
            return `Hello ${name}`;
        };
        expect(sayHello("yg")).toBe("Hello yg");
        const printHello = (name) => {
            console.log(`Hello ${name}`);
        };
        printHello("yg");
    });
});
