import React , {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import UserContext from '../../Context';
import CarImage from '../car-image';
import LinkComponent from '../link';
import Button from '../../components/button';
import detailsPageHandlers from '../../utils/details-page-handlers';
import styles from './index.module.css';


function CarDetails(props) {

    const context = useContext(UserContext);
    const history = useHistory();
    const {car} = props;
    const carId = car._id;
    const {isAdmin , user} = context;
    const {userId} = user;
    const updateLink = `/update?carId=${carId}`;
    const canLike = !car.likes.includes(userId);
    
       
        return(
            
            <div className={styles.wrapper}>
                <CarImage imageUrl={car.imageUrl} page="details"/>
                
                <div className={styles.descriptionWrapper}>
                    <div className={styles.leftDiv}>

                        <p><label className={styles.label}>Price: </label>{car.price} BGN</p>
                        <label className={styles.label}>Specifications:</label>

                        {
                            car.specifications.map(([property , value] , index) => {

                                const text = `${property} : ${value}`

                                return(
                                    <p key={index}>{text}</p>
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

                        <Button type ="delete" text="Delete" handler={(e) => detailsPageHandlers.delete(history , carId)}/>

                    </div>
                }
                {
                    !isAdmin && canLike &&
                    <Button type ="like" text={<i className="far fa-thumbs-up"> Like</i>} handler={(e) => detailsPageHandlers.like(history , carId , userId)}/>
                }
                {

                    !isAdmin && !canLike &&
                    <Button type ="dislike" text={<i className="far fa-thumbs-down"> Don't Like</i>} handler={(e) => detailsPageHandlers.dislike(history , carId , userId)}/>

                }
            </div>
        );

};

export default CarDetails;