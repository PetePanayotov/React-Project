const getLinks = (isLoggedIn , user) => {

    const guestLinks = [
        {
            title: 'Home',
            link: '/'
            
        },
        
        {
            title: 'About Us',
            link: '/about'
            
        },

        {
            title: 'Login',
            link: '/login'
            
        },

        {
            title: 'Register',
            link: '/register'
            
        }
    ];

    const userLinks = [
        {
            title: `{user.username}`,
            link: '/profile'
            
        },
        
        {
            title: 'Home',
            link: '/home'
            
        },

        {
            title: 'Catalog',
            link: '/catalog'
            
        },

        {
            title: 'About Us',
            link: '/about'
            
        },

        {
            title: 'Logout',
            link: '/logout'
            
        }
    ];

    if (isLoggedIn) {

        return userLinks;
        
    }else {
        return guestLinks;
    };

};

export default getLinks;