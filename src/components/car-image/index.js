import React from 'react';
import Button from '../button';
import handlers from '../../utils/details-page-handlers';
import styles from './index.module.css';


const {leftArrowHandler , rightArrowHandler} = handlers;

const rightArrow = <i className="fas fa-chevron-right"></i>;
const leftArrow = <i className="fas fa-chevron-left"></i>


const CarImage = ({canSlide , index , imagesArray , setIndex , imageUrl , handler , styling}) => {

    return(

        <article style={{backgroundImage: `url(${imageUrl})`}} className={styles[`${styling}-imageWrapper`]} onClick={handler}>
            {
                canSlide &&

                <Button type="arrow" text={leftArrow} handler={(event) => leftArrowHandler(event , index , imagesArray , setIndex)}/>
            }
{/* 
            <img 
                className={styles[`${styling}-image`]}
                src={imageUrl} 
                alt="Car">
        
            </img> */}

            {
                canSlide &&

                <Button type="arrow" text={rightArrow} handler={(event) => rightArrowHandler(event , index , imagesArray , setIndex)}/>
            }
        </article>
    );
};

export default CarImage;

