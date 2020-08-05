import React , {Component} from 'react';
import PageWrapper from '../../components/page-wrapper';
import UserContext from '../../Context';
import Main from '../../components/main';
import Cars from '../../components/cars-container';
import Title from '../../components/title';
import getGreeting from '../../utils/getGreeting';


class ProfilePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            greeting: '',
            queryString: this.props.location.search,
        }

    };

    static contextType = UserContext;

    componentDidMount() {
        document.title = "Profile Page";
        
        const time = new Date();
        const hour = time.getHours()
        const {isAdmin , user} = this.context;
        const greeting = getGreeting(hour , isAdmin , user.username);

        this.setState({
            greeting
        })
    }


    render() {

        const {greeting , queryString} = this.state;

        return(
            <PageWrapper>
                <Main layout="forms">
                    <Title text={greeting}/>
                    <Cars queryString={queryString} page="profile"/>
                </Main>
            </PageWrapper>
        )
    }

};

export default ProfilePage;