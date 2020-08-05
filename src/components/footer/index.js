import React , {Component} from 'react';
import {withRouter} from 'react-router-dom';
import UserContext from '../../Context';
import LinkComponent from '../link';
import Button from '../button';
import styles from './index.module.css';
import getLinks from '../../utils/navigation';

class Footer extends Component {

    static contextType = UserContext;

    logout = () => {
        
        this.context.logout();
       
        this.props.history.push('/');
    };

    render() {

        const {isLoggedIn , user , isAdmin} = this.context;
        const linksArray = getLinks(isLoggedIn , user , isAdmin)
       
        return (

            <footer className={styles.footer}>
                <div className={styles.linkContainer}>

                    {linksArray.map( ({title , link}) => {

                        return (<LinkComponent href={link} title={title} type="footer" key={title}/>)

                    })}
                    {this.context.isLoggedIn && 
                        
                        <Button type="footer" text="Logout" handler={this.logout}/>
                    }

                </div>
                <p className={styles.paragraph}>AUTO CAR</p>
            </footer>
        );
        
    };

};

export default withRouter(Footer)