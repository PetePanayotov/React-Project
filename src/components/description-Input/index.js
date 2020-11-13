import React from 'react';
import styles from './index.module.css';

function DescriptionInput ({description , handler}) {

    return (
        
            <textarea
                value={description} 
                className={styles.description}
                onChange={handler}
            /> 
    );
};

export default DescriptionInput;