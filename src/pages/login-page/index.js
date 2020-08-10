import React, { useEffect } from 'react';
import PageWrapper from '../../components/page-wrapper';
import Main from '../../components/main';
import Form from '../../components/login-register-form';
import styles from './index.module.css';


function LoginPage(props) {

    useEffect(() => {
        document.title = 'Login Page';
    } , [])

    return (
        <PageWrapper>
            <Main layout="forms">
                <div className={styles.firstDiv}></div>
                <div className={styles.formDiv}>
                    <Form page='login'/>
                </div>
                <div className={styles.secondDiv}></div>
            </Main>
        </PageWrapper>
    )
}

export default LoginPage