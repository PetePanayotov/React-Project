import React from 'react';
import LinkComponent from '../link';
import styles from './index.module.css';
import getLinks from '../../utils/navigation';

function Footer() {

    return (

        <footer className={styles.footer}>
            <div className={styles.linkContainer}>
                
                {getLinks().map( ({title , link}) => {
                    
                    return (<LinkComponent href={link} title={title} type="footer" key={title}/>)

                })}

            </div>
            <p className={styles.paragraph}>Samo Tupalki 2020</p>
        </footer>
    );   

};

export default Footer