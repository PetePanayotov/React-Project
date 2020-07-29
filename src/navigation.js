import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route

} from 'react-router-dom';

import GuestHomePage  from './pages/guest-home-page';
import AboutPage  from './pages/about-page';
import LoginPage from './pages/login-page';
import RegisterPage from './pages/register-page';
import CreatePage from './pages/create-page';
import UserHomePage from './pages/user-home-page';
import UpdatePage from './pages/update-page';
import DetailsPage from './pages/details-page';

function Navigation() {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={GuestHomePage}/>
                <Route path="/home" component={UserHomePage}/>
                <Route path="/about" component={AboutPage}/>
                <Route path="/login" component={LoginPage}/>
                <Route path="/register" component={RegisterPage}/>
                <Route path="/create" component={CreatePage}/>
                <Route path="/update" component={UpdatePage}/>
                <Route path="/details" component={DetailsPage}/>
            </Switch>
        </BrowserRouter>
    );

};

export default Navigation