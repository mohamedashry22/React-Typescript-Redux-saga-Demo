import React from 'react';
import './App.css';
import { BrowserRouter, Route , Switch , RouteComponentProps } from 'react-router-dom';
import routes from './config/routes';
import DarkMode from "./components/darkMode/darkMode";
import { connect } from 'react-redux';
import IAppState from './interfaces/IAppState';

interface IProps {
  darkMode : boolean
}

const App : React.FunctionComponent<IProps> = ({darkMode}) => {
  return (
    <div className={darkMode ? 'app--dark-mode' :''}>
    <div >
     <DarkMode /> 
      <BrowserRouter>
        <Switch>
            {
              routes.map((route,index) => {
                return (
                  <Route  
                     key    = {index}
                     path   = {route.path}
                     exact  = {route.exact}
                     render = {(props:RouteComponentProps<any>)=>(
                        <route.component {...props} {...route.props} />
                     )}
                  />
                );
              })
            }
        </Switch>
      </BrowserRouter>

    </div>
      </div>
  );
}

const mapStateToProps = (store: IAppState) => {
  return {
    darkMode : store.uiState.darkMode
  }
}

export default connect(mapStateToProps)(App);

