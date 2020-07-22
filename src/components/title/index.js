import React from 'react';
import styles from './index.module.css'

function Title(props) {
    return (
    <p className={styles.paragraph}>{props.text}</p>
    )
}

export default Title