import React from 'react';
import styles from './index.midule.css';

function Button({text , type}) {

    return (
        <div className={styles[`${type}-list-item`]}>
            <div className={styles[`${type}-link`]}>{text}</div>
        </div>
    )

}

export default Button;