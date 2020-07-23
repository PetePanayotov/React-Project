import React from 'react';
import PageWrapper from '../../components/page-wrapper';
import Main from '../../components/main';
import Form from '../../components/form';
import styles from './index.module.css';



function LoginPage() {
    return (
        <PageWrapper>
            <Main layout="forms">
                <div className={styles.div}></div>
                <div className={styles.formDiv}>
                    <Form/>
                </div>
                <div className={styles.secondDiv}></div>
            </Main>
        </PageWrapper>
    )
}

export default LoginPage