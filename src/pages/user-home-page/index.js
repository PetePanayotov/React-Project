import React , {Component} from 'react';
import PageWrapper from '../../components/page-wrapper';
import Main from '../../components/main';
import Car from '../../components/car';
import Cars from '../../components/cars-container';
import Title from '../../components/title';


class UserHomePage extends Component {
    constructor(props) {
        super(props);
    };


    render() {
        return(
            <PageWrapper>
                <Main layout="about">
                    <Title text="Our best offers"/>
                    <Cars/>
                </Main>
            </PageWrapper>
        );
    };
};

export default UserHomePage;