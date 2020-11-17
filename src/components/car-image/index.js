import React from 'react';
import styles from './index.module.css';


const CarImage = ({imageUrl , handler , styling}) => {

    return(

        <article  className={styles[`${styling}-imageWrapper`]} onClick={handler}>
            <img 
                className={styles[`${styling}-image`]}
                src={imageUrl} 
                alt="Car">        
            </img>
        </article>
    );
};

export default CarImage;

