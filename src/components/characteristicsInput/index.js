import React from 'react';
import styles from './index.module.css';

function CharacteristicsBox(props) {
    return (
        <div className={styles.div}>
            <input className={styles.left}/>
            <input className={styles.right} onBlur={props.handleBlur}/>
        </div>
    );
};

export default CharacteristicsBox;