import React , {Component} from 'react';
import {withRouter} from 'react-router-dom';
import UserContext from '../../Context';
import styles from './index.module.css';


class CarDetails extends Component {

    constructor(props) {

        super(props);

        this.state ={
            car: {
                specifications: []
            }
            
        };

    };

    static contextType = UserContext;

    componentDidMount() {

        const queryStr = this.props.location.search;

        const startIndex = queryStr.indexOf('=');

        const id = queryStr.substr(startIndex + 1);

        (async() => {

            const url = `http://localhost:9999/api/car/${id}`

            const promise = await fetch(url);
            let response = await promise.json();

            response.specifications = JSON.parse(response.specifications);
    
            this.setState({
                car: response
            });

        })();

    };




    render() {

        const {car} = this.state;

        return(
            
            <div className={styles.wrapper}>
                <section className={styles.imageWrapper}>
                    <img className={styles.image} src={car.imageUrl}></img>
                </section>
                <div className={styles.descriptionWrapper}>
                    <div className={styles.leftDiv}>

                    <p>Price: {car.price}</p>
                    <label>Specifications:</label>

                    {
                        car.specifications.map(([property , value]) => {

                            const text = `${property} : ${value}`

                            return(
                                <p>{text}</p>
                            )

                        })
                    }

                    </div>
                    <div className={styles.rightDiv}>

                        <label>Description:</label>
                        <p>{car.description}</p>
                    </div>
                </div>
            </div>
        )

    }

};

export default withRouter(CarDetails);