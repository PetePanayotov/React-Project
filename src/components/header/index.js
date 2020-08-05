import React , {Component} from 'react';
import {withRouter} from 'react-router-dom';
import styles from './index.module.css'
import LinkComponent  from '../link';
import Button from '../button';
import logo from '../../images/logo.jpg';
import getLinks from '../../utils/navigation';
import UserContext from '../../Context';


class Header extends Component{

    constructor(props) {
        super(props)
    };

    static contextType = UserContext;

    logout = () => {
        
        this.context.logout();
       
        this.props.history.push('/');
    };

    render() {
     
        const {isLoggedIn , user , isAdmin} = this.context
        const linksArray = getLinks(isLoggedIn , user ,  isAdmin);

        return (
            <header className={styles.navigation}>
                <img alt="" className={styles.logo} src={logo}></img>

                <div className={styles.linkContainer}>

                    {linksArray.map( ({title , link}) => {

                        return (<LinkComponent href={link} title={title} type="header" key={title}/>)

                    })}
                    {this.context.isLoggedIn && 

                        <Button type="header" text="Logout" handler={this.logout}/>
                    }
                </div>
            </header>
        )
    }

}

export default withRouter(Header)