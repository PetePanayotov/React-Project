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
                <Form page="register">

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

                    <Wrapper styling="login-input-wrapper">
                        <Label styling="login-label" text="Repeat Password"/>
                        <Input 
                            styling="login-input"
                            type="password"
                            value={rePassword}
                            handler={(event) => handleChange(event , 'rePassword')}
                        />
                    </Wrapper>

                    <SubmitButton 
                        type="loginRegister" 
                        text="Register" 
                        handler={(event) => register(event , history , state , context)}
                    />

                </Form>
        </PageWrapper>
    );
};

export default RegisterPage;