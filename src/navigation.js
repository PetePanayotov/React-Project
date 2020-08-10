import React , {Component} from 'react';
import {
    BrowserRouter,
    Switch,
    Route

} from 'react-router-dom';

import GuestHomePage  from './pages/guest-home-page';
import ContactsPage  from './pages/contacts-page';
import LoginPage from './pages/login-page';
import RegisterPage from './pages/register-page';
import CreatePage from './pages/create-page';
import UserHomePage from './pages/user-home-page';
import UpdatePage from './pages/update-page';
import DetailsPage from './pages/details-page';
import CatalogPage from './pages/catalog-page';
import UserContext from './Context';
import ProfilePage from './pages/user-profile-page';

class Navigation extends Component {

    static contextType = UserContext;

    render() {

        const {isAdmin , isLoggedIn} = this.context;

        return (
            <BrowserRouter>
                <Switch>

                    <Route exact path="/" component={isLoggedIn ? UserHomePage : GuestHomePage}/>
                    
                    <Route exact path="/home" component={isLoggedIn ? UserHomePage : GuestHomePage}/>
                    
                    <Route path="/contacts" component={ContactsPage}/>
                    
                    <Route exact path="/login" component={isLoggedIn ? UserHomePage : LoginPage}/>

                    <Route exact path="/register" component={isLoggedIn ? UserHomePage : RegisterPage}/>

                    <Route exact path="/create" component={isLoggedIn && isAdmin ? CreatePage : UserHomePage}/>

                    <Route exact path="/update" component={isLoggedIn && isAdmin ? UpdatePage : UserHomePage}/>
                    
                    <Route path="/details" component={isLoggedIn ? DetailsPage : GuestHomePage}/>
                    
                    <Route path="/catalog" component={isLoggedIn ? CatalogPage : GuestHomePage}/>

                    <Route path="/profile" component={isLoggedIn ? ProfilePage : GuestHomePage}/>

                </Switch>
            </BrowserRouter>
        );
    }

};

export default Navigation