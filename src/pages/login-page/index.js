import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../Context';
import PageWrapper from '../../components/page-wrapper';
import Form from '../../components/form';
import Wrapper from '../../components/wrapper';
import Label from '../../components/label';
import Input from '../../components/input-field';
import SubmitButton from '../../components/submit-button';
import submitHandlers from '../../utils/submitHandlers';


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
                <Form page='login'>

                    <Wrapper styling="login-input-wrapper">
                        <Label styling="login-label" text="Username"/>
                        <Input 
                            styling="login-input"
                            type="text"
                            value={username}
                            handler={(event) => handleChange(event , 'username')}
                        />
                    </Wrapper>

                    <Wrapper styling="login-input-wrapper">
                        <Label styling="login-label" text="Password"/>
                        <Input 
                            styling="login-input"
                            type="password"
                            value={password}
                            handler={(event) => handleChange(event , 'password')}
                        />
                    </Wrapper>

                    <SubmitButton 
                        type="loginRegister" 
                        text="Login" 
                        handler={(event) => login(event , history , state , context)}
                    />

                </Form>
        </PageWrapper>
    );
};

export default LoginPage