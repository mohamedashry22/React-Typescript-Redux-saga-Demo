import { Reducer } from 'redux';
import uiActions from '../actions/UiActions.type';
import AppActionTypes from '../../enums/AppActionTypes'
import { IUIState } from '../../interfaces/IUIState';


const initialProductState : IUIState = {
    darkMode:false
}

const uiReducer : Reducer<IUIState,uiActions> = (state = initialProductState,action) => {
    switch (action.type){
        case AppActionTypes.SET_DARK_MODE:{
            return{ 
                ...state,
                darkMode: action.darkMode
            }
        }
        default:
            return state;
    }

}

export default uiReducer;