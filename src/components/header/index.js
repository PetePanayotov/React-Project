import React , {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import UserContext from '../../Context';
import LinkComponent  from '../link';
import Button from '../button';
import logo from '../../images/logo.jpg';
import getLinks from '../../utils/navigation';
import styles from './index.module.css'


function Header() {

    const context = useContext(UserContext);
    const history = useHistory();
    const {isLoggedIn , user , isAdmin} = context
    const linksArray = getLinks(isLoggedIn , user ,  isAdmin);

    const logout = () => {
        
        context.logout();
        history.push('/');
    };

    return (
        <header className={styles.header}>
            <article className={styles['logo-wrapper']}>
                
                <img alt="" className={styles.logo} src={logo}></img>

            </article>

            <nav className={styles.navigation}>

                <ul className={styles.list}>

                    {linksArray.map( ({title , link} , i) => {

                        return (<LinkComponent href={link} title={title} type="header" key={i}/>);

                    })}

                    {isLoggedIn && 
                        <Button type="header" text="Logout" handler={logout}/>
                    }

                </ul>
            </nav>
        </header>
    );
   
};

export default Header