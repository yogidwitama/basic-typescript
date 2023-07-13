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
    it("Should support default value", () => {
        const sayHello = (name = "Guest") => {
            return `Hello ${name}`;
        };
        expect(sayHello()).toBe("Hello Guest");
        expect(sayHello("yg")).toBe("Hello yg");
    });
});
