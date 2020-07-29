import React , {Component} from 'react';
import styles from './index.module.css';
import LinkComponent from '../link';


function Car({key , brand , model , id , price , imageUrl}) {

    return (
        <div key={key} className={styles.wrapper}>
            <section className={styles.imageWrapper}>
                <img 
                    className={styles.image}
                    src={imageUrl} 
                    alt="Car Image">

                </img>
            </section>
            <div>
                <p className={styles.paragraph}>{`${brand} ${model}`}</p>
                <p className={styles.paragraph}>Price: {price} BGN</p>
            </div>
                <LinkComponent
                    title="Findout More"
                    type="car"
                    href={`/details?id=${id}`}
                />
        </div>
    )


};

export default Car;