import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

//App components
import Home from './home/Home';
import Work from './Work';
import Header from './Header';

const AppRouter = () => (

    
    <BrowserRouter>
        <div className='container'>
            <Header />
            <div className="container--body">
                <Route exact path="/" component={Home} />
                <Route path="/about" component={() => <Work />} />
                
                
            </div>
        </div>
    </BrowserRouter>
    
);

export default AppRouter;