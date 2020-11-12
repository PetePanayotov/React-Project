import React from 'react';
import styles from './index.module.css';


const Element = ({children , type}) => {

    return (
        <div className={styles[type]}>
            {children}
        </div>
    )

};

export default Element