import React , {Component, useState, useContext, useEffect} from 'react';
import {withRouter, useHistory} from 'react-router-dom';
import UserContext from '../../Context';
import Input from '../inputField';
import SubmitButton from '../submit-button';
import styles from './index.module.css';
import getInputFields from '../../utils/login-register-input-Fields';
import submitHandlers from '../../utils/submitHandlers';

function Form (props) {
    
    const {page} = props;
    const context = useContext(UserContext);
    const history = useHistory();
    const handleSubmit = submitHandlers[page];

    const loginPageState = {
        username: '',
        password: '',
    };

    const registerPageState = {
        username: '',
        password: '',
        rePassword: ''
    };
    
    const [state , setState] = useState(page === 'login' ? loginPageState : registerPageState)

    const handleChange = (event , type) => {

        const newState = {};

        newState[type] = event.target.value;

        setState({...state , ...newState});

    };

    return(
        
        <form className={styles.form}>
           
            {getInputFields()[page].map(({label , type , value , key}) => {
                
                return (
                
                    <Input

                        labelName={label}
                        handleChange = {(event) => handleChange(event , value)}
                        type = {type}
                        value = {state[value]}
                        keyName={key.toString()}
                    />
                
                )
            })}
            <SubmitButton type="loginRegister" 
                          text={page === 'login' ? 'Login' : 'Register'} 
                          handler={(event) => handleSubmit(event , history , state , context)}
            />
        </form>
    );
     
};


// class Form extends Component {

//     constructor(props) {
//         super(props);

//         if (this.props.page === 'login') {
            
//             this.state = {
//                 username: '',
//                 password: '',
//             }

//         }else {

//             this.state = {
//                 username: '',
//                 password: '',
//                 rePassword: ''
//             }

//         }

//     }

//     static contextType = UserContext;

//     handleChange = (event , type) => {

//         const newState = {};

//         newState[type] = event.target.value;

//         this.setState(newState);

//     }

//     render() {

//         const {page} = this.props;
//         console.log(page)
        
//         const handleSubmit = submitHandlers[page];
//         console.log(handleSubmit);
//         return(
            
//             <form className={styles.form}>
               
//                 {getInputFields()[page].map(({label , type , value , key}) => {
                    
//                     return (
                    
//                         <Input
    
//                             labelName={label}
//                             handleChange = {(event) => {this.handleChange(event , value)}}
//                             type = {type}
//                             value = {this.state[value]}
//                             keyName={key.toString()}
//                         />
                    
//                     )
//                 })}

//                 <SubmitButton type="loginRegister" 
//                               text={page === 'login' ? 'Login' : 'Register'} 
//                               handler={(event) => handleSubmit(event , this.props , this.state , this.context)}
//                 />

//             </form>
//         );
      
//     };

// };

export default withRouter(Form);