import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

//App components
import Home from './home/Home';
import About from './About';
import Header from './Header';

const AppRouter = () => (

    
    <BrowserRouter>
        <div className='container'>
            <Header />
            <div className="container--body">
                <Route exact path="/" component={Home} />
                <Route path="/about" component={() => <About />} />
                
                
            </div>
        </div>
    </BrowserRouter>
    
);

export default AppRouter;