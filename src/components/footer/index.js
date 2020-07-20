import React from 'react';
import Link from '../link';
import styles from './index.module.css';
import image from '../images/blue-origami-bird-flipped.png'

function Footer() {

    return (

        <footer className={styles.footer}>
            <div className={styles.linkContainer}>
                <Link href="/" title="Home" type="footer"/>
                <Link href="/" title="About Us" type="footer"/>
                <Link href="/" title="Login" type="footer"/>
                <Link href="/" title="Register" type="footer"/>
            </div>
            <p className={styles.paragraph}>Samo Tupalki</p>
        </footer>
    );   

};

export default Footer