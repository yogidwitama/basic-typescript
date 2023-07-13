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
    it('should support function in interface',()=>{
        interface Person{
            name: string;
            sayHello(name:string):string;
        };
        const Person: Person ={
            name:"yg",
            sayHello(name:string):string {
                return `Hello ${name}, my name is ${this.name}`;
            },
        }
        console.info(Person.sayHello("YUGIOH"))
    });
    it('should support intersection types',()=>{
        interface Hasname{
            name: string
        }
        interface HasId{
            id: string
        }
        type Domain = HasId & Hasname;
        const domain :Domain ={
            name:"yg",
            id:"1",
        }
    })
});