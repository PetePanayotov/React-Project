import React , {Component} from 'react';
import UserContext from './Context';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
            user: null
        }
    };

    login = (user) => {
        
        this.setState({
            isLoggedIn: true,
            user
        });
    };

    logout = () => {
        
        this.setState({
            isLoggedIn: false,
            user: null
        });
    };

    render() {

        const {isLoggedIn , user} = this.state;

        return(
            <UserContext.Provider 
                value = {{
                    isLoggedIn,
                    user,
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