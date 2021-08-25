import { connect } from 'react-redux';
import React from 'react';
import { Dispatch } from 'redux';
import IAppState from '../../interfaces/IAppState';
import { enableDarkModeActionCreator } from '../../store/actions/UiActionsCreators';
import { getDarkMode } from '../../store/selectors';

interface IProps {
  darkMode : boolean,
  changeDarkMode : Function
}
 const DarkMode:React.FunctionComponent<IProps> = ({darkMode,changeDarkMode}) => {

  const onClickHandler = (event:React.MouseEvent) => {

    const target = event.target as HTMLInputElement;
    if(target.checked){
      changeDarkMode(true);
    }else{
      changeDarkMode(false);
    }
  };

    return (
          <div className="dark-mode-container">
          <input id="dark-mode" type="checkbox" checked={darkMode} onClick={(e) => onClickHandler(e)} />
          <label htmlFor="dark-mode">Dark Mode</label>
          </div>
    );
}

const mapStateToProps = (store: IAppState) => {
  return {
    darkMode : getDarkMode(store) ,
  }
}

const mapDispatchToProps = (dispatch :Dispatch) => {
  return {
      changeDarkMode : (darkMode :boolean ) => dispatch(enableDarkModeActionCreator(darkMode)),
  }   
}

export default connect(mapStateToProps,mapDispatchToProps)(DarkMode);


