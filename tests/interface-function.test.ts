import { SellerReadOnly } from "../src/seller-forreadonly";

describe('Interface Read Only Funtion', () => {
    it('should support in typescript', ()=>{
        const seller: SellerReadOnly={
            id:1,
            name: "Toko achong",
            nib:"123123123",
            npwp:"123123"
        };
        seller.name ="Toko yogi";
        // seller.nib="1233455";
        console.info(seller);
    });
    it('Should support function interface', ()=>{
        interface AddFunction{
            (value1:number, value2: number): number
        }
        const add: AddFunction=(value1:number, value2: number):number =>{
            return value1+value2;
        };
        expect(add(2,2)).toBe(4);
    });
});