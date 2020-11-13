import React from 'react';
import styles from './index.module.css';


const Wrapper = ({children , styling}) => {

    return (
        <div className={styles[styling]}>
            {children}
        </div>
    )

};

export default Wrapper