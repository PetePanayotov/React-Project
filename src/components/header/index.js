import React from 'react';
import styles from './index.module.css'
import LinkComponent  from '../link';
import logo from '../../images/logo.jpg';
import getLinks from '../../utils/navigation';

function Header () {

    return (
        <header className={styles.navigation}>
            <img alt="" className={styles.logo} src={logo}></img>

            <div className={styles.linkContainer}>
                
                {getLinks().map( ({title , link}) => {
                    
                    return (<LinkComponent href={link} title={title} type="header" key={title}/>)

                })}

            </div>
        </header>
    )

}

export default Header