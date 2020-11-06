import React , {useContext ,  useState, useEffect, useCallback} from 'react';
import {useHistory , useLocation} from 'react-router-dom';
import UserContext from '../../Context';
import CarImage from '../car-image';
import LinkComponent from '../link';
import Button from '../../components/button';
import detailsPageHandlers from '../../utils/details-page-handlers';
import getQueryValue from '../../utils/getQueryValue';
import styles from './index.module.css';


function CarDetails({isAdmin , userId , car ,pressed , setPressed}) {
    
    const history = useHistory();
    const {like , dislike , deleteCar} = detailsPageHandlers;
    const {imageUrl , price , specifications , description , likes} = car;
    const carId = car._id
    const updateLink = `/update?carId=${carId}`;
    const canLike = !likes.includes(userId); 


    return(
        
        <div className={styles.wrapper}>
            <CarImage imageUrl={imageUrl} page="details"/>
            
            <div className={styles.descriptionWrapper}>
                <div className={styles.leftDiv}>
                    <p><label className={styles.label}>Price: </label>{price} BGN</p>
                    <label className={styles.label}>Specifications:</label>
                    {
                        specifications.map(([property , value] , index) => {
                            const text = `${property} : ${value}`
                            return(
                                <p key={index}>{text}</p>
                            )
                        })
                    }
                </div>
                <div className={styles.rightDiv}>
                    <p><label className={styles.label}>Description:</label></p>
                    <p>{description}</p>
                </div>
            </div>
            {
                isAdmin &&
                <div className={styles["buttons-div"]}>
                    
                    <LinkComponent title="Update" href={updateLink} type="update"/>
                    <Button type ="delete" text="Delete" handler={(e) => deleteCar(history , carId)}/>
                </div>
            }
            {
                !isAdmin && canLike &&
                <Button type ="like" text={<i className="far fa-thumbs-up"> Like</i>} handler={(e) => like(carId , userId , pressed , setPressed)}/>
            }
            {
                !isAdmin && !canLike &&
                <Button type ="like" text={<i className="far fa-thumbs-down"> Don't Like</i>} handler={(e) => dislike(carId , userId , pressed , setPressed)}/>
            }
        </div>
    );

};

export default CarDetails;