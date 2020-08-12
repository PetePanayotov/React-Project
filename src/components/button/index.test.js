import React from 'react';
import {create , act} from 'react-test-renderer';
import Button from './index'
import detailsPageHandlers from '../../utils/details-page-handlers';
const {like , dislike , deletCar , comment , removeComent} = detailsPageHandlers;

describe('Button Component' , () => {
    
    
    it('Should render Like button' , () => {
        
        let root;
        act(() => {

            root = create(<Button type="like" text="Like" handler={like}/>)
            
        });

        expect(root.toJSON()).toMatchSnapshot()

    });

    it('Should render dislike button' , () => {
        
        let root;
        act(() => {

            root = create(<Button type="like" text="Don't Like" handler={dislike}/>)
            
        });

        expect(root.toJSON()).toMatchSnapshot()

    });

    it('Should render Delete button' , () => {

        let root;
        act(() => {

            root = create(<Button type="delete" text="Delete" handler={deletCar}/>)
            
        });

        expect(root.toJSON()).toMatchSnapshot()

    });

    it('Should render Comment button' , () => {

        let root;
        act(() => {

            root = create(<Button type="comment" text="Comment" handler={comment}/>)
            
        });

        expect(root.toJSON()).toMatchSnapshot()

    });

    it('Should render Remove Comment button' , () => {

        let root;
        act(() => {

            root = create(<Button type="remove" text="Remove" handler={removeComent}/>)
            
        });

        expect(root.toJSON()).toMatchSnapshot()

    });

});