import AppActionTypes from '../enums/AppActionTypes';

export interface ISetDarkModeAction{
    type :  AppActionTypes.SET_DARK_MODE,
    darkMode : boolean
}
