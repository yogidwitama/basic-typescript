import { Category, Product } from "../src/type-alias";

describe('Type Alias', () => {
    it("should support in typescript", () => {
        const category: Category = {
            id: "1",
            name: "handphone",
            description:"tolelolet"
        };

        const product: Product = {
            id: "1",
            name: "Samsung A89",
            price: 2309000,
            category: category,
        };
        console.info(category);
        console.info(product);
        // product.description = "test";
    })
});