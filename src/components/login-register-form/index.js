import React from 'react';
import {withRouter} from 'react-router-dom';
import styles from './index.module.css';


const Form = (props) => {

    return(
        
        <form className={styles.form}>
           {
               props.children
           }
        </form>
    );
     
};

export default withRouter(Form);