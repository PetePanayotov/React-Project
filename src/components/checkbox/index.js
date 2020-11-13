import React from 'react';
import styles from './index.module.css';

const CheckBox = ({type , isChecked , label , value , handler}) => {

    return (
            <input 
                type={type}
                checked={isChecked}
                value={value} 
                className={styles.input}
                onChange={handler} 
            />
    );

};

export default CheckBox;