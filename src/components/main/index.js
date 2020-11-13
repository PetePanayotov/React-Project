import React from 'react';
import styles from './index.module.css';


const Main = ({children , layout}) => {

    return (
        <main className={styles[layout]}>
            {children}
        </main>
    );

};

export default Main;