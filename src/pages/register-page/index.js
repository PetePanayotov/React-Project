import React from 'react';
import PageWrapper from '../../components/page-wrapper';
import Main from '../../components/main';
import Form from '../../components/form';
import styles from './index.module.css';

//// HandleRegisterSubmit  Function Here



const handleRegisterSubmit = async (event , state) => {

    event.preventDefault();

    const url = 'http://localhost:9999/api/user/register';
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

    console.log('this is the new user' , user);

}

function RegisterPage() {
    return (
        <PageWrapper>
            <Main layout="forms">
                <div className={styles.div}></div>
                <div className={styles.formDiv}>
                    <Form page="register" handleSubmit={handleRegisterSubmit}/>
                </div>
                <div className={styles.secondDiv}></div>
            </Main>
        </PageWrapper>
    );
};

export default RegisterPage;