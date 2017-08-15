import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

//App components
import Home from './home/Home';
import Work from './work/Work';
import Header from './Header';
import Contact from './contact/Contact'
const AppRouter = () => (

    
    <BrowserRouter>
        <div className='container'>
            <Header />
            <div className="container--body">     
                <Route exact path="/" component={Home} />
                <Route path="/work" component={() => <Work />} />
                <Route path="/contact" component={Contact} />
                
            </div>
        </div>
    </BrowserRouter>
    
);

export default AppRouter;