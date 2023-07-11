describe('Type Alias', () => {
    it("should support in typescript", () => {
        const category = {
            id: "1",
            name: "handphone",
            description: "tolelolet"
        };
        const product = {
            id: "1",
            name: "Samsung A89",
            price: 2309000,
            category: category,
        };
        console.info(category);
        console.info(product);
        // product.description = "test";
    });
});
export {};
