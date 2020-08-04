import React , {Component} from 'react';
import LinkComponent from '../link';
import CarImage from '../car-image';
import styles from './index.module.css';


function Car({key , brand , model , id , price , imageUrl}) {

    return (
        <div key={key} className={styles.wrapper}>

            <CarImage imageUrl={imageUrl} page="catalog"/>
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