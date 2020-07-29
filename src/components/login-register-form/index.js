import React , {Component} from 'react';
import {withRouter} from 'react-router-dom';
import styles from './index.module.css';
import Input from '../inputField';
import getInputFields from '../../utils/login-register-input-Fields';
import submitHandlers from '../../utils/submitHandlers';
import UserContext from '../../Context';

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

        const page = this.props.page;

        const handleSubmit = submitHandlers[page];

        return(
            
            <form className={styles.form} onSubmit={(event) => handleSubmit(event , this.props , this.state , this.context)}>
               
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

                <input className={styles.submit} type="submit" value="Submit" />

            </form>
        );
      
    };

};

export default withRouter(Form);