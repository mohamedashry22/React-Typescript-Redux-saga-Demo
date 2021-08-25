import IProductState from "./IProductState";
import { IUIState } from "./IUIState";

export default interface IAppState{
    productState: IProductState;
    uiState: IUIState;
}