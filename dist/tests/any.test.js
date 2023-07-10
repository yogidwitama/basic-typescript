"use strict";
describe('Any', function () {
    it('should support in typescript', function () {
        const person = {
            id: 1,
            name: "yogidwitama",
            age: 26
        };
        person.age = 21;
        person.address = "canada";
        console.info(person);
    });
});
