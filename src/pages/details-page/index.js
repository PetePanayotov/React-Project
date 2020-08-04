import React , {Component} from 'react';
import PageWrapper from '../../components/page-wrapper';
import Main from '../../components/main';
import CarDetails from '../../components/car-details';
import Title from '../../components/title';


class DetailsPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            car: {}
        };
    };

    componentDidMount() {

        document.title = 'Details Page';

        const queryStr = this.props.location.search;

        const startIndex = queryStr.indexOf('=');

        const id = queryStr.substr(startIndex + 1);

        (async() => {

            const url = `http://localhost:9999/api/car/${id}`

            const promise = await fetch(url);
            const response = await promise.json();
    
            this.setState({
                car: response
            });

        })();

    };

    render() {

        const {car} = this.state;
        
        return(
            <PageWrapper>
                <Main layout="forms">
                    <Title text={`${car.brand} ${car.model}`}/>
                    <CarDetails/>
                </Main>
            </PageWrapper>
        );

    }
   
};

export default DetailsPage