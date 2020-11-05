import React , {useEffect, useState} from 'react';
import UserContext from './Context';
import handlers from './utils/catalog-page-handlers';

const {getAllCars} = handlers;

function getCookie(name) {
    let v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
};


const App = (props) => {

    const initialState = {

        isLoggedIn: null,
        cars: [],
        user: {},
        isAdmin: undefined
    }

    const [state , setState] = useState(initialState);
    const {isLoggedIn , user, isAdmin , cars} = state;


    const login = async (user , isAdmin) => {

        const allCars = await getAllCars();
        
        setState({
            isLoggedIn: true,
            user,
            isAdmin,
            cars: allCars
        });

    };

    const logout = () => {

        document.cookie = "oreo= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
        
        setState({
            isLoggedIn: false,
            user: {},
            isAdmin: undefined,
            cars: []
        });

    };

    const verifyWhenRefresh = async () => {

        const cookieValue = getCookie('oreo');

        if (!cookieValue) {
            return logout()
            
        };
        
        const url = 'http://localhost:9999/api/user/verify';
        
        const data = {token: cookieValue};
  
        const headersObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        const promise = await fetch(url , headersObj);

        if (promise.status === 200) {
            
            const response = await promise.json();
            const [isAdmin , user] = response;
            
            return login(user , isAdmin);
        };

        return logout();

    };

    useEffect(() => {

        verifyWhenRefresh();

    } , []);


    if (isLoggedIn === null) {
        return(<div>Loading...</div>);
    };

    return (

        <UserContext.Provider 
            value = {{
                isLoggedIn,
                user,
                cars,
                isAdmin,
                login, 
                logout,

            }}
        >
            
            {props.children}

        </UserContext.Provider>
    
    );

};

export default App;