import React , {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import UserContext from '../../Context';
import LinkComponent from '../link';
import Button from '../button';
import styles from './index.module.css';
import getLinks from '../../utils/navigation';

function Footer() {

    const context = useContext(UserContext);
    const history = useHistory();
    const {isLoggedIn , user , isAdmin} = context;
    const linksArray = getLinks(isLoggedIn , user , isAdmin);

    const logout = () => {
        
        context.logout();
        history.push('/');
    };
 
    return (
        <footer className={styles.footer}>
            <div className={styles.linkContainer}>

                {linksArray.map( ({title , link}) => {
                    return (<LinkComponent href={link} title={title} type="footer" key={title}/>)
                })}
                {isLoggedIn && 
                    
                    <Button type="footer" text="Logout" handler={logout}/>
                }

            </div>
            <p className={styles.paragraph}>AUTO CAR</p>
        </footer>
    );
       
};

export default Footer