import React from 'react';
import {withRouter} from 'react-router-dom';
import styles from './index.module.css';


const Form = ({children , page}) => {

    return (
        <form className={styles[page]}>
            {
                children
            }
        </form>
    );
   
};

export default withRouter(Form);