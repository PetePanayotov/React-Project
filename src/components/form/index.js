import React , {Component} from 'react';
import styles from './index.module.css';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    usernameChange = (event) => {
        this.setState({
            username: event.target.value
        });
        
    }

    passwordChange = (event) => {
        this.setState({
            password: event.target.value
        });
        
    }

    render() {
    
        return(
            <form className={styles.form}>
                <div className={styles.div}>
                    <label className={styles.label}>
                        Username:
                    </label>
                    <input onChange={this.usernameChange} value={this.state.username} className={styles.input} type="text"/>
                </div>
                <div className={styles.div}>
                    <label className={styles.label}>
                        Password:
                    </label>
                    <input value={this.state.password} onChange={this.passwordChange} className={styles.input} type="password"/>
                </div>
                <input className={styles.submit} type="submit" value="Submit" />
            </form>
        );
      
    };

};

export default Form;