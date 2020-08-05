const getGreeting = (hour , isAdmin , username) => {

    let firstPart = '';
    let secondPart = '';

    if (hour >=4 && hour <= 12) {

        firstPart = 'Good Morning';

    }else if(hour > 12 && hour <=18) {
        
        firstPart = 'Good Afternoon';

    }else {
        firstPart = 'Good Evening';
    };

    if (isAdmin) {
        
        secondPart = 'These are the top 10 most liked Cars';

    }else {
        secondPart = 'These are the cars that you have liked';
    };

    return `${firstPart} ${username}! ${secondPart}:`

};

export default getGreeting;