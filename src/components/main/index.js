import React from 'react';
import styles from './index.module.css';


function Main(props) {

    return (
        <div className={styles[props.layout]}>
            {props.children}
        </div>
    );

};

export default Main;