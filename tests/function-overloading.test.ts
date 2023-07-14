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
    it("Should support default value", () => {
        const sayHello = (name: string = "Guest"): string => {
            return `Hello ${name}`;
        }
        expect(sayHello()).toBe("Hello Guest");
        expect(sayHello("yg")).toBe("Hello yg");
    });
    it("Should support default value", () => {
        const sum = (...values: number[]): number => {
            let total = 0;
            for (const value of values) {
                total += value;
            }
            return total
        }
        expect(sum(1, 2, 3, 4, 5)).toBe(15);
    });
    it("should support optional parameter", () => {
        const sayHello = (firstName: string, lastName?: string): string => {
            if (lastName) {
                return `Hello ${firstName} ${lastName}`
            } else {
                return `Hello ${firstName}`
            }
        }
        expect(sayHello("yg")).toBe("Hello yg")
        expect(sayHello("yg", "dwtm")).toBe("Hello yg dwtm")
    });
    it("should support function overloading", () => {
        const callMe: {
            (value: number): number;
            (value: string): number;
        } = (value: any): any => {
            if (typeof value === "string") {
                return value.toUpperCase();
            } else if (typeof value === "number") {
                return value * 10;
            }
        };
    
        expect(callMe(10)).toBe(100);
        expect(callMe("yg")).toBe("YG");
    });
    
});