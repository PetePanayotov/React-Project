import React , {useEffect, useState} from 'react';
import UserContext from './Context';


const getCookie = (name) => {
    let v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
};


const App = (props) => {

    const initialState = {

        isLoggedIn: null,
        user: {},
        isAdmin: undefined
    }

    const [state , setState] = useState(initialState);
    const {isLoggedIn , user, isAdmin} = state;


    const login = async (user , isAdmin) => {
        
        setState({
            isLoggedIn: true,
            user,
            isAdmin,
        });

    };

    const logout = () => {

        document.cookie = "oreo= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
        
        setState({
            isLoggedIn: false,
            user: {},
            isAdmin: undefined,
        });

    };

    useEffect(() => {

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