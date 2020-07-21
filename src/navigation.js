import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route

} from 'react-router-dom';

import GuestHomePage  from './pages/guest-home-page';
import AboutPage  from './pages/about-page';


function Navigation() {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={GuestHomePage}/>
                <Route path="/about" component={AboutPage}/>
            </Switch>
        </BrowserRouter>
    );

};

export default Navigation