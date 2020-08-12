import React from 'react';
import styles from './index.module.css';


function Input({labelName , value , handleChange , type}) {

    return (

        <div className={styles.div}>
            <label className={styles.label}>
                {labelName}
            </label>
            <input 
                value={value} 
                onChange={handleChange} 
                type={type}
                className={styles.input} 
            />
        </div>

    );

};

export default Input;