import React from 'react';
import styles from './index.module.css';

const Input = ({type, isChecked , label , value , handler}) => {

    return (
        <div className={styles.div}>
            <label className={styles.label}>
                {label}
            </label>
            <input 
                type={type}
                checked={isChecked}
                value={value} 
                className={styles.input}
                onChange={handler} 
            />
        </div>
    )

};

export default Input;