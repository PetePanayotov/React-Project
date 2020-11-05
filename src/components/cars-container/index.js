import React from 'react';
import styles from './index.module.css';


const CarsContainer = (props) => {


    return (
        <div className={styles.container}>
            {
                props.children
            }
        </div>
    );
      
};

export default CarsContainer;