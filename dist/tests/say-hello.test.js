import { sayHello } from "../src/say-hello";
describe("sayHello", function () {
    it('sholud return hello yg', function () {
        expect(sayHello('yg')).toBe("hello yg");
    });
});
