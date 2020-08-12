import React , {useContext ,  useState, useEffect, useCallback} from 'react';
import {useHistory , useLocation} from 'react-router-dom';
import UserContext from '../../Context';
import CarImage from '../car-image';
import LinkComponent from '../link';
import Button from '../../components/button';
import detailsPageHandlers from '../../utils/details-page-handlers';
import getQueryValue from '../../utils/getQueryValue';
import styles from './index.module.css';


function CarDetails({setParentState}) {
    
    const history = useHistory();
    const location = useLocation();
    const context = useContext(UserContext);
    const {isAdmin , user} = context;
    const {userId} = user;
    const {like , dislike , deleteCar} = detailsPageHandlers;

    const initialState = {
        specifications: [],
        likes: [],
    };

    const [car , setCar] = useState(initialState);
    const [isLiked , setIsLiked] = useState(false);

    const getCar = useCallback(async () => {

        const id = getQueryValue(location);
        const url = `http://localhost:9999/api/car/${id}`

        const promise = await fetch(url);
        let response = await promise.json();
        response.specifications = JSON.parse(response.specifications);

        setCar(response);
        setParentState(`${response.brand} ${response.model}`);

    } , []);

    useEffect(() => {

        document.title = 'Details Page';
        getCar()

    }, [isLiked]);

    const carId = car._id;
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

                        <Button type ="delete" text="Delete" handler={(e) => deleteCar(history , carId)}/>

                    </div>
                }
                {
                    !isAdmin && canLike &&
                    <Button type ="like" text={<i className="far fa-thumbs-up"> Like</i>} handler={(e) => like(carId , userId , isLiked ,setIsLiked)}/>
                }
                {

                    !isAdmin && !canLike &&
                    <Button type ="like" text={<i className="far fa-thumbs-down"> Don't Like</i>} handler={(e) => dislike(carId , userId , isLiked ,setIsLiked)}/>

                }
            </div>
        );

};

export default CarDetails;