import {Selector} from "react-redux";
import IAppState from "../interfaces/IAppState";
import { IProduct, IProductCategory } from "../interfaces/IProduct";

export const getDarkMode: Selector<IAppState, boolean> = state =>  state.uiState.darkMode;
export const getProducts: Selector<IAppState, IProduct[]> = state => state.productState.products;
export const getSelectedProducts: Selector<IAppState, IProductCategory[]> = state => state.productState.selectedProducts;

