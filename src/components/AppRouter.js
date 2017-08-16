import React from 'react';
import {BrowserRouter, Route, HashRouter} from 'react-router-dom';

//App components
import Home from './home/Home';
import Work from './work/Work';
import Header from './Header';
import Contact from './contact/Contact'
const AppRouter = () => (

    
    <HashRouter>
        <div className='container'>
            <Header />
            <div className="container--body">     
                <Route path="/" component={Home} />
                <Route path="/work" component={() => <Work />} />
                <Route path="/contact" component={Contact} />
                
            </div>
        </div>
    </HashRouter>
    
);

export default AppRouter;