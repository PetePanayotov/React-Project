import React from 'react';
import styles from './index.module.css';


function Input(props) {

    return (

        <div className={styles.div} key={props.keyName}>
            <label className={styles.label}>
                {props.labelName}
            </label>
            <input 
                value={props.value} 
                onChange={props.handleChange} 
                type={props.type}
                className={styles.input} 
            />
        </div>

    );

};

export default Input;