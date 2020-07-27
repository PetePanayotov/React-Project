import React , {Component} from 'react';
import LinkComponent from '../link';
import styles from './index.module.css';
import getLinks from '../../utils/navigation';
import UserContext from '../../Context';

class Footer extends Component {

    static contextType = UserContext;

    render() {

        const {isLoggedIn , user , userStatus} = this.context;
        const linksArray = getLinks(isLoggedIn , user , userStatus)
       
        return (

            <footer className={styles.footer}>
                <div className={styles.linkContainer}>

                    {linksArray.map( ({title , link}) => {

                        return (<LinkComponent href={link} title={title} type="footer" key={title}/>)

                    })}
                    {this.context.isLoggedIn && 
                        <div className={styles['footer-button-div']}>
                            <div className={styles['footer-button']} onClick={this.logout}>Logout</div>
                        </div>
                    }

                </div>
                <p className={styles.paragraph}>AUTO CAR 2020</p>
            </footer>
        );
        
    };

};

export default Footer