import React , {Component} from 'react';
import PageWrapper from '../../components/page-wrapper';
import Main from '../../components/main';


class UserHomePage extends Component {
    constructor(props) {
        super(props);
    };


    render() {
        return(
            <PageWrapper>
                <Main layout="forms"/>
            </PageWrapper>
        );
    };
};

export default UserHomePage;