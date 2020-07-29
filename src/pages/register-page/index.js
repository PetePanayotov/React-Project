import React from 'react';
import PageWrapper from '../../components/page-wrapper';
import Main from '../../components/main';
import Form from '../../components/login-register-form';
import styles from './index.module.css';


function RegisterPage() {
    return (
        <PageWrapper>
            <Main layout="forms">
                <div className={styles.firstDiv}></div>
                <div className={styles.formDiv}>
                    <Form page="register"/>
                </div>
                <div className={styles.secondDiv}></div>
            </Main>
        </PageWrapper>
    );
};

export default RegisterPage;