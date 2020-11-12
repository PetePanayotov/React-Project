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

const {login} = submitHandlers;


const LoginPage = () => {

    document.title = 'Login';

    const history = useHistory();
    const context = useContext(UserContext);
    const [state , setState] = useState(initialState);
    const {username , password} = state;

    const handleChange = (event , type) => {

        const value = event.target.value
        setState({...state , [type]: value});

    };

    return (
        <PageWrapper>
            <Main layout="forms">
                <div className={styles.firstDiv}></div>
 
                <Form page='login'>

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

                    <SubmitButton 
                        type="loginRegister" 
                        text="Login" 
                        handler={(event) => login(event , history , state , context)}
                    />

                </Form>

                <div className={styles.secondDiv}></div>
            </Main>
        </PageWrapper>
    )
}

export default LoginPage