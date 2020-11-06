import React from 'react';
import styles from './index.module.css';

function Button({type , handler , text}) {
    return (
    
        <button className={styles[`${type}-button`]} onClick={handler}>{text}</button>
      
    )
};

export default Button;