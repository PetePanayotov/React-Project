const getLinks = (isLoggedIn , user , isAdmin) => {

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
            title: `[${user.username}]`,
            link: `/profile?userId=${user.userId}`
            
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

    ];

    const adminLinks = [
        {
            title: `[${user.username}]`,
            link: `/profile?userId=${user.userId}`
            
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
            title: 'Create',
            link: '/create'
            
        },

        {
            title: 'About Us',
            link: '/about'
            
        },

    ];

    if (isLoggedIn) {

        if (isAdmin) {
            return adminLinks
        }

        return userLinks;
        
    }else {
        return guestLinks;
    };

};

export default getLinks;