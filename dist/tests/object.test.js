"use strict";
describe('Object', () => {
    it("Should support in type script", () => {
        const person = {
            id: "1",
            name: "yogi"
        };
        console.info(person);
        person.id = "2";
        person.name = "dwitama";
        console.info(person);
    });
});
