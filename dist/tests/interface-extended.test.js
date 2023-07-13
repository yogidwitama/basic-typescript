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
    it('Should support extend interface', () => {
        const employee = {
            id: "1",
            varietas: "yogi",
            division: "IT"
        };
        console.info(employee);
        const manager = {
            id: "2",
            varietas: "Yogi",
            division: "Drone",
            numberOfVarietas: 10,
        };
        console.info(manager);
    });
});
export {};
