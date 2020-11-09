import React from 'react';
import styles from './index.module.css';


function CarImage({imageUrl , page}) {

    return(

        <article className={styles[`${page}-imageWrapper`]}>
            <img 
                className={styles[`${page}-image`]}
                src={imageUrl} 
                alt="Car">
        
            </img>
        </article>
    );
};

export default CarImage;

