import React from 'react';
import styles from './index.module.css';

const Paragraph = ({children , styling}) => {

    console.log(styling)

    return (
        <p className={styles[styling]}>
            {children}
        </p>
    )

};

export default Paragraph;