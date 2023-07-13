describe('Interface Read Only Funtion', () => {
    it('should support in typescript', () => {
        const seller = {
            id: 1,
            name: "Toko achong",
            nib: "123123123",
            npwp: "123123"
        };
        seller.name = "Toko yogi";
        // seller.nib="1233455";
        console.info(seller);
    });
    it('Should support function interface', () => {
        const add = (value1, value2) => {
            return value1 + value2;
        };
        expect(add(2, 2)).toBe(4);
    });
    it('should support function in interface', () => {
        const Person = {
            name: "yg",
            sayHello(name) {
                return `Hello ${name}, my name is ${this.name}`;
            },
        };
        console.info(Person.sayHello("YUGIOH"));
    });
    it('should support intersection types', () => {
        const domain = {
            name: "yg",
            id: "1",
        };
    });
    it('should support types assertions', () => {
        const person = {
            name: "yg",
            age: 25
        };
        const person2 = person;
        // person2.sayHello("budi");
        console.info(person2);
    });
});
export {};
