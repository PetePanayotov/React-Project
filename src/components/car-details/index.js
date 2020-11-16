import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import CarImage from '../car-image';
import Wrapper from '../../components/wrapper';
import LinkComponent from '../link';
import Button from '../../components/button';
import Label from '../../components/label';
import detailsPageHandlers from '../../utils/details-page-handlers';


const CarDetails = ({isAdmin , userId , car ,pressed , setPressed}) => {
    
    const history = useHistory();
    const [index , setIndex] = useState(0);
    const mainImageURL = car.images[index] || car.imageUrl;
    const {like , dislike , deleteCar} = detailsPageHandlers;
    const {price , specifications, images , description , likes} = car;
    const carId = car._id
    const updateLink = `/update?carId=${carId}`;
    const canLike = !likes.includes(userId);


    return(
        
        <Wrapper styling="car-details-wrapper">
            <CarImage 
                imageUrl={mainImageURL} 
                styling="big"
                imagesArray={images}
                index={index}
                setIndex={setIndex} 
                canSlide={images.length > 1} 
            />

            {
                car.images.length > 0 &&

                <Wrapper styling="small-images-wrapper">
                    {
                        car.images.map((imageURL , i) => {
                            
                            return (
                                <CarImage 
                                    key={i} 
                                    imageUrl={imageURL} 
                                    styling="small" 
                                    handler={() => setIndex(i)}
                                />
                            );
                        })
                    }
                </Wrapper>
            }
            
            <Wrapper styling="details-content-wrapper">
                
                <Wrapper styling="details-spec-wrapper">
                    
                    <p>
                        <Label styling="details-label" text={`Price: `}/>
                        {price} BGN
                    </p>

                    <Label styling="details-label" text="Specifications:"/>
                    {
                        specifications.map(([property , value] , index) => {
                            const text = `${property} : ${value}`
                            return(
                                <p key={index}>{text}</p>
                            )
                        })
                    }

                </Wrapper>

                <Wrapper styling="details-description-wrapper">
                    <p>
                        <Label styling="details-label" text="Description:"/>
                    </p>
                    <p>{description}</p>
                </Wrapper>

            </Wrapper>

            {
                isAdmin &&
                <Wrapper styling="update-delete-wrapper">                   
                    <LinkComponent title="Update" href={updateLink} type="update"/>
                    <Button type ="delete" text="Delete" handler={(e) => deleteCar(history , carId)}/>
                </Wrapper>
            }
            {
                !isAdmin && canLike &&
                <Button type ="like" text={<i className="far fa-thumbs-up"> Like</i>} handler={(e) => like(carId , userId , pressed , setPressed)}/>
            }
            {
                !isAdmin && !canLike &&
                <Button type ="like" text={<i className="far fa-thumbs-down"> Don't Like</i>} handler={(e) => dislike(carId , userId , pressed , setPressed)}/>
            }
        </Wrapper>
    );

};

export default CarDetails;