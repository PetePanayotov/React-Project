import React, { useState, useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import PageWrapper from '../../components/page-wrapper';
import UserContext from '../../Context';
import Main from '../../components/main';
import Cars from '../../components/cars-container';
import Title from '../../components/title';
import getGreeting from '../../utils/getGreeting';
import getQueryValue from '../../utils/getQueryValue';


function ProfilePage() {

    const [greeting , setGreeting] = useState('');
    const location = useLocation();
    const userId = getQueryValue(location);
    const context = useContext(UserContext);

    useEffect(() => {

        document.title = "Profile Page";
        
        const time = new Date();
        const hour = time.getHours()
        const {isAdmin , user} = context;
        const newGreeting = getGreeting(hour , isAdmin , user.username);

        setGreeting(newGreeting);
        
    } , [])


    return(
            <PageWrapper>
                <Main layout="forms">
                    <Title text={greeting}/>
                    <Cars userId={userId} page="profile"/>
                </Main>
            </PageWrapper>
        )
    

};

export default ProfilePage;