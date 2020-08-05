import React , {Component} from 'react';
import {withRouter} from 'react-router-dom';
import UserContext from '../../Context';
import CarImage from '../car-image';
import LinkComponent from '../link';
import Button from '../../components/button';
import detailsPageHandlers from '../../utils/details-page-handlers';
import styles from './index.module.css';


class CarDetails extends Component {

    constructor(props) {

        super(props);

        this.state ={
            car: {
                specifications: [],
                likes: []
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
        const carId = car._id;
        const {isAdmin , user} = this.context;
        const {userId} = user;
        const updateLink = `/update?carId=${car._id}`;
        const canLike = !car.likes.includes(userId);
       
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

                        <Button type ="delete" text="Delete" handler={(e) => detailsPageHandlers.delete(this.props , carId)}/>

                    </div>
                }
                {
                    !isAdmin && canLike &&
                    <Button type ="like" text="Like" handler={(e) => detailsPageHandlers.like(this.props , carId , userId)}/>
                }
            </div>
        );

    };

};

export default withRouter(CarDetails);