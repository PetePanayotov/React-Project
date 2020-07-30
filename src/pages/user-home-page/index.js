import React from 'react';
import PageWrapper from '../../components/page-wrapper';
import Main from '../../components/main';
import Cars from '../../components/cars-container';
import Title from '../../components/title';


function UserHomePage() {

    return(
        <PageWrapper>
            <Main layout="forms">
                <Title text="Our best offers"/>
                <Cars page="home"/>
            </Main>
        </PageWrapper>
    );
   
};

export default UserHomePage;