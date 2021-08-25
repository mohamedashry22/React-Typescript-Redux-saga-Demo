import AppActionTypes from '../enums/AppActionTypes';
import { IProduct ,IProductCategory} from './IProduct';

export interface IGetStartProductsAction{
    type :  AppActionTypes.FETCH_PRODUCTS
}

export interface IGetProductsAction{
    type :  AppActionTypes.GET_PRODUCTS,
    products :  IProduct[]
}

export interface ISetProductsAction{
    type :  AppActionTypes.SET_PRODUCTS,
    product :  IProductCategory,
    categoryIndex :number
}

export interface IUnSetProductsAction{
    type :  AppActionTypes.UNSET_PRODUCTS,
    product :  IProductCategory
}