describe('Function', () => {
    it("Should support in typescript", () => {
        const sayHello = (name: string): string => {
            return `Hello ${name}`;
        }
        expect(sayHello("yg")).toBe("Hello yg");

        const printHello = (name: string): void => {
            console.log(`Hello ${name}`)
        };
        printHello("yg");
    });
});