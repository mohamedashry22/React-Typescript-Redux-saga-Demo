import { getProductsFromApi } from '../../Api/api';
import AppActionTypes from '../../enums/AppActionTypes';
import {call,put,takeEvery,all} from 'redux-saga/effects';
import {  getProductsDataCreator } from '../actions/ProductActionsCreator';


export function* getProductsSaga(): any{
    try {
        const response = yield call(getProductsFromApi);
        const products = response.data.productCategories;
        yield put(getProductsDataCreator(products));
    } catch (error) {
        
    }
}

export function* productsSaga(){
    yield all([
        takeEvery(AppActionTypes.FETCH_PRODUCTS,getProductsSaga)
    ]);
}
