import React from 'react';
import renderer from 'react-test-renderer';
import Button from './index'
import detailsPageHandlers from '../../utils/details-page-handlers';
const {like , dislike , deletCar , comment , removeComent} = detailsPageHandlers;

describe('Button Component' , () => {

    it('Should render Like button' , () => {
        const tree = renderer.create(
            <Button type="like" text="Like" handler={like}/>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Should render dislike button' , () => {
        const tree = renderer.create(
            <Button type="like" text="Don't Like" handler={dislike}/>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Should render Delete button' , () => {
        const tree = renderer.create(
            <Button type="delete" text="Delete" handler={deletCar}/>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Should render Comment button' , () => {
        const tree = renderer.create(
            <Button type="comment" text="Comment" handler={comment}/>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Should render Remove Comment button' , () => {
        const tree = renderer.create(
            <Button type="remove" text="Remove" handler={removeComent}/>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

});