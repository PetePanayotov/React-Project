import React from 'react';
import styles from './index.module.css';
import image from '../images/blue-origami-bird.png'

function Origam({description , author}) {

    return (
        <div className={styles.container}>
            <img alt="" src={image} className={styles.image}></img>
            <div className={styles.containerDiv}>
            
                <p className={styles.description}>
                     {description}
                </p>
                
                <span className={styles.user}>
                    <small>
                        Author:
                    </small> 
                    {author.username}
                </span>
            </div>
        </div>
    );
};

export default Origam