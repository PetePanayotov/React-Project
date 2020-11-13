import React from 'react';
import styles from './index.module.css'

const Title = ({text}) => {
    return (
        <p className={styles.paragraph}>{text}</p>
    )
}

export default Title