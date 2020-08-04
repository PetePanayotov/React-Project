import React , {Component} from 'react';
import {withRouter} from 'react-router-dom';
import UserContext from '../../Context';
import CarImage from '../car-image';
import LinkComponent from '../link';
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

    deleteCar = async () => {
        const id = this.state.car._id;
        const url = `http://localhost:9999/api/car/${id}`;

        await fetch(url , {method: "DELETE"});

        this.props.history.push('/home');

    }


    render() {

        const {car} = this.state;
        const {isAdmin} = this.context
        const updateLink = `/update?carId=${car._id}`

        return(
            
            <div className={styles.wrapper}>
                <CarImage imageUrl={car.imageUrl} page="details"/>
                
                <div className={styles.descriptionWrapper}>
                    <div className={styles.leftDiv}>

                        <p><label className={styles.label}>Price: </label>{car.price} BGN</p>
                        <label className={styles.label}>Specifications:</label>

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

                        <p><label className={styles.label}>Description:</label></p>
                        <p>{car.description}</p>

                    </div>
                </div>
                {
                    isAdmin &&
                    <div className={styles["buttons-div"]}>
                        
                        <LinkComponent title="Update" href={updateLink} type="update"/>
                        
                        <div className={styles['delete-button-div']}>
                            <div className={styles['delete-button']} onClick={(e) => this.deleteCar()}>Delete</div>
                        </div>

                    </div>
                }
                {/* {
                    !isAdmin &&
                    <div className={styles["buttons-div"]}>
                        <Button text="Like" type="like" handler=""/>
                    </div>
                } */}
            </div>
        );

    };

};

export default withRouter(CarDetails);