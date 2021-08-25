import AppActionTypes from '../../enums/AppActionTypes';
import { ISetDarkModeAction } from '../../interfaces/IDarkMode';

export const enableDarkModeActionCreator = (darkMode:boolean) : ISetDarkModeAction => {
    return{ 
        type: AppActionTypes.SET_DARK_MODE,
        darkMode
    }
}
