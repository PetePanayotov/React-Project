import React from 'react';
import PageWrapper from '../../components/page-wrapper';
import Main from '../../components/main';
import Form from '../../components/form';
import styles from './index.module.css';

//// handleLoginSubmit function here

const handleLoginSubmit = async (event , state) => {

    event.preventDefault();

    const url = 'http://localhost:9999/api/user/login';
    const username = state.username;
    const password = state.password;

    console.log(url , username , password);

    const data = {username , password};

    console.log(data);

    const headerObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    console.log(headerObj);

    const response = await fetch(url , headerObj);
    const user = await response.json();

    console.log('this is the loggedin user' , user);

}

function LoginPage() {
    return (
        <PageWrapper>
            <Main layout="forms">
                <div className={styles.div}></div>
                <div className={styles.formDiv}>
                    <Form page='login' handleSubmit={handleLoginSubmit}/>
                </div>
                <div className={styles.secondDiv}></div>
            </Main>
        </PageWrapper>
    )
}

export default LoginPage