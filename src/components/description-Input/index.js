import React from 'react';
import styles from './index.module.css';

function DescriptionInput ({description , handler}) {

    return (
        
        <div className={styles.descriptionDiv} key='3'>
            <label className={styles.label}>
                Description
            </label>
            <textarea
                value={description} 
                className={styles.description}
                onChange={handler}
            /> 
        </div>
    );
};

export default DescriptionInput;