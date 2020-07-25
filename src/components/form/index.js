import React , {Component} from 'react';
import styles from './index.module.css';
import Input from '../inputField';
import getInputFields from '../../utils/inputFields';

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

    handleChange = (event , type) => {

        const newState = {};

        newState[type] = event.target.value;

        this.setState(newState);

    }

    render() {

        const page = this.props.page;
        const {handleSubmit} = this.props
       
        return(
            
            <form className={styles.form} onSubmit={ async (event) => { await handleSubmit(event , this.state)}}>
               
                {getInputFields()[page].map(({label , type , value , key}) => {
                    console.log()
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

export default Form;