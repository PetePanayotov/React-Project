import React from 'react';
import LinkComponent from '../link';
import styles from './index.module.css';

function Footer() {

    return (

        <footer className={styles.footer}>
            <div className={styles.linkContainer}>
                <LinkComponent href="/" title="Home" type="footer"/>
                <LinkComponent href="/about" title="About Us" type="footer"/>
                <LinkComponent href="/" title="Login" type="footer"/>
                <LinkComponent href="/" title="Register" type="footer"/>
            </div>
            <p className={styles.paragraph}>Samo Tupalki</p>
        </footer>
    );   

};

export default Footer