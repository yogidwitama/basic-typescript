describe('Function', () => {
    it("Should support in typescript", () => {
        const sayHello = (name: string): string => {
            return `Hello ${name}`;
        }
        expect(sayHello("yg")).toBe("Hello yg");

        const printHello=(name:string):void =>{
            console.log(`Hello ${name}`)
        };
        printHello("yg");
    });
    it("Should support default value", ()=>{
        const sayHello=(name:string="Guest"):string=>{
            return `Hello ${name}`;
        }
        expect(sayHello()).toBe("Hello Guest");
        expect(sayHello("yg")).toBe("Hello yg");
    })
});