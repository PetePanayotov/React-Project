import React , {Component} from 'react';
import {withRouter} from 'react-router-dom';
import UserContext from '../../Context';
import Input from '../inputField';
import SubmitButton from '../submit-button';
import styles from './index.module.css';
import getInputFields from '../../utils/login-register-input-Fields';
import submitHandlers from '../../utils/submitHandlers';

class Form extends Component {

    constructor(props) {
        super(props);

        if (this.props.page === 'login') {
            
            this.state = {
                username: '',
                password: '',
            }

        }else {

            this.state = {
                username: '',
                password: '',
                rePassword: ''
            }

        }

    }

    static contextType = UserContext;

    handleChange = (event , type) => {

        const newState = {};

        newState[type] = event.target.value;

        this.setState(newState);

    }

    render() {

        const {page} = this.props;

        const handleSubmit = submitHandlers[page];

        return(
            
            <form className={styles.form}>
               
                {getInputFields()[page].map(({label , type , value , key}) => {
                    
                    return (
                    
                        <Input
    
                            labelName={label}
                            handleChange = {(event) => {this.handleChange(event , value)}}
                            type = {type}
                            value = {this.state[value]}
                            keyName={key.toString()}
                        />
                    
                    )
                })}

                <SubmitButton type="loginRegister" 
                              text={page === 'login' ? 'Login' : 'Register'} 
                              handler={(event) => handleSubmit(event , this.props , this.state , this.context)}
                />

            </form>
        );
      
    };

};

export default withRouter(Form);