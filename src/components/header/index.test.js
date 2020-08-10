import React from 'react';
import renderer from 'react-test-renderer';
import Header from './index';
import UserContext from '../../Context';
import {BrowserRouter , Route} from 'react-router-dom';

describe('Header Component' , () => {

    it('should render not authenticated routes' , () => {
        const tree = renderer.create(

            <BrowserRouter>
                <Route>
                    <UserContext.Provider value={{
                        isLoggedIn: false,
                        user: {

                        }
                    }}>
                        <Header/>
                    </UserContext.Provider>

                </Route>
            </BrowserRouter>
        ).toJSON();
        expect(tree).toMatchSnapshot();

    });

    it('should render authenticated routes' , () => {

        const tree = renderer.create(

            <BrowserRouter>
                <Route>
                    <UserContext.Provider value={{
                        isLoggedIn: true,
                        user: {
                            username: 'tigyra',
                            userId: '1234'
                        }
                    }}>
                        <Header/>
                    </UserContext.Provider>

                </Route>
            </BrowserRouter>
        ).toJSON();
        expect(tree).toMatchSnapshot();

    });

    it('should render admin routes' , () => {

        const tree = renderer.create(

            <BrowserRouter>
                <Route>
                    <UserContext.Provider value={{
                        isLoggedIn: true,
                        isAdmin: true,
                        user: {
                            username: 'tigyra',
                            userId: '1234'
                        }
                    }}>
                        <Header/>
                    </UserContext.Provider>

                </Route>
            </BrowserRouter>
        ).toJSON();
        expect(tree).toMatchSnapshot();

    });

});