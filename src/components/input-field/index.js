import React from 'react';
import styles from './index.module.css';

const Input = ({type, styling ,value , handler}) => {

    return (
            <input 
                type={type}
                value={value} 
                className={styles[styling]}
                onChange={handler} 
            />
    );

};

export default Input;