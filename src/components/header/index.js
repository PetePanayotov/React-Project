import React , {Component} from 'react';
import styles from './index.module.css'
import LinkComponent  from '../link';
import logo from '../../images/logo.jpg';
import getLinks from '../../utils/navigation';
import UserContext from '../../Context';

class Header extends Component{

    static contextType = UserContext;

    render() {
        console.log(this.context)
        const {isLoggedIn , user} = this.context
        
        return (
            <header className={styles.navigation}>
                <img alt="" className={styles.logo} src={logo}></img>

                <div className={styles.linkContainer}>

                    {getLinks(isLoggedIn , user).map( ({title , link}) => {

                        return (<LinkComponent href={link} title={title} type="header" key={title}/>)

                    })}

                </div>
            </header>
        )
    }

}

export default Header