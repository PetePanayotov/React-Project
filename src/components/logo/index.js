import React from 'react';
import styles from './index.module.css';
import {Link} from 'react-router-dom';

function mark(event) {
    console.log(event.target);
}

function Logo ({href , src , logoName , handler}) {

    return(
            <div className={styles.div}>
                <Link to={href}>
                    <img className={styles.img} src={src} alt={logoName} onClick={handler}></img>
                </Link>
            </div>
    );

};

export default Logo;