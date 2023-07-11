describe('Interface Read Only', () => {
    it('should support in typesctipy', () => {
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
});
export {};
