export interface SellerReadOnly {
    id: number;
    name: string;
    address?: string;
    readonly nib?:string;
    readonly npwp?: string;
}