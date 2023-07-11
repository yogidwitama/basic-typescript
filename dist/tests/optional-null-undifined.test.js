"use strict";
describe('Optional Parameter', () => {
    it('should support null and defined', () => {
        function sayHello(name) {
            if (name) {
                console.info(`Hello ${name}`);
            }
            else {
                console.info("Hello");
            }
        }
        sayHello("Yogi");
        const name = undefined;
        sayHello(name);
        sayHello(null);
    });
});
