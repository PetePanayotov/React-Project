import React , {Component} from 'react';
import LinkComponent from '../link';
import CarImage from '../car-image';
import styles from './index.module.css';


function Car({page , isAdmin , likes , brand , model , id , price , imageUrl}) {

    return (
        <div className={styles.wrapper}>

            <CarImage imageUrl={imageUrl} page="catalog"/>
            <div>
                <p className={styles.paragraph}>{`${brand} ${model}`}</p>
                <p className={styles.paragraph}>Price: {price} BGN</p>
            </div>
                <div className={styles['like-link-div']}>
                    {page === 'profile' && isAdmin &&
                        <div className={styles['likes-div']}>Likes: {likes}</div>
                    }
                    <LinkComponent
                        title="Findout More"
                        type="car"
                        href={`/details?id=${id}`}
                    />
                </div>
        </div>
    )


};

export default Car;