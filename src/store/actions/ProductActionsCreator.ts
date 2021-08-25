import { IProduct,IProductCategory } from './../../interfaces/IProduct';
import AppActionTypes from '../../enums/AppActionTypes';
import  {IGetProductsAction ,IGetStartProductsAction, ISetProductsAction,IUnSetProductsAction} from '../../interfaces/IGetProductActions'

export const unsetProductActionCreator = (product:IProductCategory) : IUnSetProductsAction => {
    return{ 
        type: AppActionTypes.UNSET_PRODUCTS,
        product
    }
}

export const setProductActionCreator = (product:IProductCategory,categoryIndex:number) : ISetProductsAction => {
    return{ 
        type: AppActionTypes.SET_PRODUCTS,
        product,
        categoryIndex
    }
}

export const getProductsDataCreator = (products : IProduct[]) : IGetProductsAction  => {
    return { 
        type : AppActionTypes.GET_PRODUCTS,
        products,
    }
}

export const getProductsStartCreator = () : IGetStartProductsAction  => {
    return { 
        type : AppActionTypes.FETCH_PRODUCTS
    }
}
