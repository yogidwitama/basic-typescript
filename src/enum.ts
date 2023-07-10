export enum CustomerType{
    REGULER,
    GOLD,
    PLATINUM
};

export type Customer ={
    id: number;
    name: string;
    type: CustomerType;
}