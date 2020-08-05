import React from 'react';
import styles from './index.module.css';

function Button({type , handler , text}) {
    return (
        <div className={styles[`${type}-button-div`]}>
            <button className={styles[`${type}-button`]} onClick={handler}>{text}</button>
        </div>
    )
};

export default Button;