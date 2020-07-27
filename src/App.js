import React , {Component} from 'react';
import UserContext from './Context';

function getCookie(name) {
    let v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
};

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: null,
            user: {},
            userStatus: undefined
        }
    };

    login = (user , userStatus) => {
        
        this.setState({
            isLoggedIn: true,
            user,
            userStatus
        });
    };

    logout = () => {
        document.cookie = "oreo= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
        
        this.setState({
            isLoggedIn: false,
            user: {},
            userStatus: undefined
        });

    };

    componentDidMount() {


        (async () => {

            const cookieValue = getCookie('oreo');

            if (!cookieValue) {
                this.logout()
                return
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
            
            const response = await promise.json();
    
            const [isAdmin , user] = response;

            this.login(user , isAdmin);
    
        })();


    };

    render() {

        const {isLoggedIn , user, userStatus} = this.state;

        if (isLoggedIn === null) {
            return(<div>Loading...</div>);
        }

        return(
            <UserContext.Provider 
                value = {{
                    isLoggedIn,
                    user,
                    userStatus,
                    login: this.login,
                    logout: this.logout
    
                }}
            >
                
                {this.props.children}

            </UserContext.Provider>
        
        )
    }

};

export default App;