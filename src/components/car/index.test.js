import React from 'react';
import {BrowserRouter , Route} from 'react-router-dom';
import {create , act} from 'react-test-renderer';
import Car from './index';


describe('Car Component' , () => {

    it('Should render catalog page Car article' , () => {

        let root;
        act(() => {
            root = create(
            <BrowserRouter>
                <Route>
                    <Car page="catalog" brand="BMW" model="330 E92" id="1234567" price="30 000" imageUrl="https://google.com/bmw"/>
                </Route>
            </BrowserRouter>
            )
        });

        expect(root.toJSON()).toMatchSnapshot();

    });

    it('Should render admin user page Car article' , () => {

        let root;
        act(() => {
            root = create(
            <BrowserRouter>
                <Route>
                    <Car page="catalog" isAdmin={true} likes="7" brand="BMW" model="330 E92" id="1234567" price="30 000" imageUrl="https://google.com/bmw"/>
                </Route>
            </BrowserRouter>
            )
        });

        expect(root.toJSON()).toMatchSnapshot();

    });

});