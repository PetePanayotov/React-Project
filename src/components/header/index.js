import React from 'react';
import styles from './index.module.css'
import LinkComponent  from '../link';
import logo from '../../images/logo.jpg';

function Header () {

    return (
        <header className={styles.navigation}>
            <img alt="" className={styles.logo} src={logo}></img>

            <div className={styles.linkContainer}>
                
                <LinkComponent href="/" title="Home" type="header"/>
                <LinkComponent href="/about" title="About Us" type="header"/>
                <LinkComponent href="/login" title="Login" type="header"/>
                <LinkComponent href="/register" title="Register" type="header"/>
                
            </div>
        </header>
    )

}

export default Header