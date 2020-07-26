import React from 'react';

const UserContext = React.createContext({
    isLoggedIn: false,
    user: null,
    login: () => {},
    logout: () => {}
});

export default UserContext;