import React from 'react';
import {create , act} from 'react-test-renderer';
import CarImage from './index';


describe('CarImage Component' , () => {

    it('Should render catalog page car image' , () => {
        let root;

        act(() => {
            root = create(<CarImage page="catalog" imageUrl="https://google.com"/>)
        });

        expect(root.toJSON()).toMatchSnapshot();

    });

    it('Should render details page car image' , () => {
        let root;

        act(() => {
            root = create(<CarImage page="details" imageUrl="https://google.com"/>)
        });

        expect(root.toJSON()).toMatchSnapshot();

    });

});