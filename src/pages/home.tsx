import React from 'react';
import IPage from    '../interfaces/IPage';
import { Link } from 'react-router-dom';

const HomePage : React.FunctionComponent<IPage> = (props) => {
    return (
       <div className='home__startContainer'>
            <Link to="/products" className="app__start-button">Start</Link>
        </div> 
    );
}

export default HomePage;
