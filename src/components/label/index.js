import React from 'react';
import styles from './index.module.css';

const Label = ({text , styling}) => {

    return (
            <label className={styles[styling]}>
                {text}
            </label>
    )

};

export default Label;