import React, { useContext, useState } from 'react';
import UserContext from '../../Context';
import PageWrapper from '../../components/page-wrapper';
import Main from '../../components/main';
import Form from '../../components/form';
import Input from '../../components/inputField';
import SubmitButton from '../../components/submit-button';
import submitHandlers from '../../utils/submitHandlers';
import styles from './index.module.css';
import { useHistory } from 'react-router-dom';


const initialState = {
    username: '',
    password: '',
    rePassword: ''
};

const {register} = submitHandlers;


const RegisterPage = () => {

    document.title = 'Register';

    const history = useHistory();
    const context = useContext(UserContext);
    const [state , setState] = useState(initialState);
    const {username , password , rePassword} = state;

    const handleChange = (event , type) => {

        const value = event.target.value
        setState({...state , [type]: value});

    };

    return (
        <PageWrapper>
            <Main layout="forms">
                <div className={styles.firstDiv}></div>
 
                <Form page="register">

                    <Input
                        type="text"
                        value={username}
                        labelName="Username"
                        handleChange={(event) => handleChange(event , 'username')}
                    />

                    <Input
                        type="password"
                        value={password}
                        labelName="Password"
                        handleChange={(event) => handleChange(event , 'password')}
                    />

                    <Input
                        type="password"
                        value={rePassword}
                        labelName="Repeat Password"
                        handleChange={(event) => handleChange(event , 'rePassword')}
                    />

                    <SubmitButton 
                        type="loginRegister" 
                        text="Register" 
                        handler={(event) => register(event , history , state , context)}
                    />

                </Form>

                <div className={styles.secondDiv}></div>
            </Main>
        </PageWrapper>
    );
};

export default RegisterPage;