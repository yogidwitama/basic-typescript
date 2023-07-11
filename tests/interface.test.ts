import { Seller } from "../src/seller";

describe('Data Type Interface', () => {
    it('should support in typescript', () => {
        const seller: Seller = {
            id: 1,
            name: " Toko achong"
        };
        console.info(seller);
    })
});