import React from 'react';
import styles from './index.module.css';

function Input ({type , label , stateValue , handler}) {

    return (
        <div className={styles.div} key='1'>
            <label className={styles.label}>
                {label}
            </label>
            <input 
                type={type}
                value={stateValue} 
                className={styles.input}
                onChange={handler} 
            />
        </div>
    )

};

export default Input;