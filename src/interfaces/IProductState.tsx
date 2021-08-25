import { IProduct, IProductCategory } from "./IProduct";

export default interface IProductState{
    readonly products: IProduct[]
    readonly selectedProducts:IProductCategory[]
}
