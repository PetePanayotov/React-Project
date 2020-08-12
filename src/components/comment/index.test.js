import React from 'react';
import {create , act} from 'react-test-renderer';
import UserContext from '../../Context';
import Comment from './index';


describe('Comment Component' , () => {

    it('Should render admin account comment' , () => {
        let root;
        act(() => {
            
            root = create(
                <UserContext.Provider value={{
                    isLoggedIn: true,
                    isAdmin: true,
                    user: {
                        username: 'tigyra',
                        userId: '1234'
                    }
                }}>

                    <Comment author="amador" comment="Vyrvi li" time="12.08.2020" handler={() => {}}/>
                </UserContext.Provider>
            );
        });

        expect(root.toJSON()).toMatchSnapshot();
    });

    it('Should render regular user account comment' , () => {
        let root;
        act(() => {
            
            root = create(
                <UserContext.Provider value={{
                    isLoggedIn: true,
                    isAdmin: false,
                    user: {
                        username: 'tigyra',
                        userId: '1234'
                    }
                }}>

                    <Comment author="amador" comment="Vyrvi li" time="12.08.2020" handler={() => {}}/>
                </UserContext.Provider>
            );
        });

        expect(root.toJSON()).toMatchSnapshot();
    });

});