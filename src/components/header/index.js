import React , {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import styles from './index.module.css'
import LinkComponent  from '../link';
import Button from '../button';
import logo from '../../images/logo.jpg';
import getLinks from '../../utils/navigation';
import UserContext from '../../Context';


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
        <header className={styles.navigation}>
            <img alt="" className={styles.logo} src={logo}></img>
            <div className={styles.linkContainer}>

                {linksArray.map( ({title , link}) => {
                    return (<LinkComponent href={link} title={title} type="header" key={title}/>)
                })}
                {isLoggedIn && 
                    <Button type="header" text="Logout" handler={logout}/>
                }

            </div>
        </header>
    );
   
};

export default Header