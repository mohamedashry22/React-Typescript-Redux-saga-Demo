import { Store, createStore, combineReducers,applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga"
import { composeWithDevTools } from "redux-devtools-extension";
import IAppState from '../interfaces/IAppState';
import ProductReducer from './reducers/productsReducers';
import uiReducer from './reducers/uiReducers';
import { productsSaga } from './saga/productsSaga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers<IAppState>({
  productState : ProductReducer,
  uiState : uiReducer
});

export default function createGlobalStore(): Store<IAppState,any>{
  const store = createStore(rootReducer, undefined,composeWithDevTools(applyMiddleware(sagaMiddleware)));
  sagaMiddleware.run(productsSaga);
  return store;
}

