export interface IProduct {
    name : string;
    products : IProductCategory[]
}

export interface IProductCategory{
    id:number;
    name: string;
    description: string;
    price:IPrice[];
    checked :boolean;
}
export interface IPrice{
    amount:string;
    billingFrequency: string;
    periodStart: number
}