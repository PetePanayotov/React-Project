import React from 'react';
import styles from './index.module.css'
import Link  from '../link';
import logo from '../images/logo.jpg';

function Header () {

    return (
        <header className={styles.navigation}>
            <img alt="" className={styles.logo} src={logo}></img>

            <div className={styles.linkContainer}>
                
                <Link href="/" title="Home" type="header"/>
                <Link href="/" title="About Us" type="header"/>
                <Link href="/" title="Login" type="header"/>
                <Link href="/" title="Register" type="header"/>
                
            </div>
        </header>
    )

}

export default Header