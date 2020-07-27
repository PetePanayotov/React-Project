import React from 'react';

const UserContext = React.createContext({
    isLoggedIn: null,
    user: null,
    userStatus: null,
    login: () => {},
    logout: () => {}
});

export default UserContext;