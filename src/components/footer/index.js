import React , {Component} from 'react';
import LinkComponent from '../link';
import styles from './index.module.css';
import getLinks from '../../utils/navigation';
import UserContext from '../../Context';

class Footer extends Component {

    static contextType = UserContext;

    render() {

        const {isLoggedIn , user} = this.context

        return (

            <footer className={styles.footer}>
                <div className={styles.linkContainer}>

                    {getLinks(isLoggedIn , user).map( ({title , link}) => {

                        return (<LinkComponent href={link} title={title} type="footer" key={title}/>)

                    })}

                </div>
                <p className={styles.paragraph}>Samo Tupalki 2020</p>
            </footer>
        );
        
    };

};

export default Footer