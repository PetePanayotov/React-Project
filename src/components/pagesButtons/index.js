import React from 'react';
import styles from './index.module.css';

function PageButton({number}) {
    return (
        <button className={styles.button}>{number}</button>
    )
};

export default PageButton;