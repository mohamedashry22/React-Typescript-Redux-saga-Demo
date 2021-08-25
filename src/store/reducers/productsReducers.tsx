import { Reducer } from 'redux';
import IProductState from '../../interfaces/IProductState';

import ProductActions from '../actions/ProductActions.type';
import AppActionTypes from '../../enums/AppActionTypes'


const initialProductState : IProductState = {
    products: [],
    selectedProducts:[]
}

const productsReducer : Reducer<IProductState,ProductActions> = (state = initialProductState,action) => {
    switch (action.type){
        case AppActionTypes.UNSET_PRODUCTS:{
            return{ 
                ...state,
                selectedProducts: state.selectedProducts.filter(element => element.name !== action.product.name)
            }
        }
        case AppActionTypes.SET_PRODUCTS:{
            debugger;
            return{ 
                ...state,
                selectedProducts: state.selectedProducts.concat(action.product),
                
            }
        }
        case AppActionTypes.FETCH_PRODUCTS: {
            return { 
                ...state,
            }
        }
        case AppActionTypes.GET_PRODUCTS: {
            return { 
                ...state,
                products: action.products,
            }
        }
        default:
            return state;
    }

}

export default productsReducer;