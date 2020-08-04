import React from 'react';
import styles from './index.module.css';


function CarImage({imageUrl , page}) {

    return(

        <section className={styles[`${page}-imageWrapper`]}>
            <img 
                className={styles[`${page}-image`]}
                src={imageUrl} 
                alt="Car Image">
        
            </img>
        </section>
    );
};

export default CarImage;

