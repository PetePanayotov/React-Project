import React , {Component} from 'react';
import {withRouter} from 'react-router-dom';
import styles from './index.module.css';
import CharacteristicsBox from '../specifications-Input';
import Input from '../create-Input-Fields';
import DescriptionInput from '../description-Input';
import getCreateInputFields from '../../utils/create-Input-Fields';
import submitHandlers from '../../utils/submitHandlers';
import handlers from '../../utils/create-form-handlers';

class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {
            brand: '',
            _id: '',
            model: '',
            price: '',
            imageUrl: '',
            description: '',
            specifications: [],
            isVipOffer: false,
            
        };

    };

    updateState = (newState) => {
        this.setState(newState)
    }

    componentDidMount() {

        if (this.props.page === 'update') {

            const queryString = this.props.location.search;
            const startIndex = queryString.indexOf('=');
            const id = queryString.substring(startIndex + 1);
            
            (async() => {

                const promise = await fetch(`http://localhost:9999/api/car/${id}`);
                const response = await promise.json();
                response.specifications = JSON.parse(response.specifications)

                this.setState(response)

            })();

        };

};

    render() {

        const array = this.state.specifications;
        const inputFieldsArray = getCreateInputFields();
        const handleSubmit = this.props.page === 'create' ?submitHandlers.create : submitHandlers.update
        
        return (
            <form className={styles.form}>

                <div className={styles.leftDiv}>

                    {inputFieldsArray.map(({label , stateProperty , type}) => {
                        return (
                            <Input
                                type={type}
                                isChecked={this.state.isVipOffer ?true :false}
                                label={label}
                                stateValue={this.state[stateProperty]}
                                handler={(event) => {handlers.handleInputChange(event , this.state ,stateProperty , this.updateState)}}
                            />
                        )
                    })}
                    
                    <DescriptionInput
                        description={this.state.description}
                        handler={(event) => {handlers.handleInputChange(event , this.state ,'description' , this.updateState)}}
                    />

                </div>

                <div className={styles.rightDiv}>

                    {   this.props.page === 'create' &&

                    <div className={styles.buttonDiv}>
                        <label className={styles.label}>
                            Specifications:
                        </label>
                        <button className={styles.button} 
                        onClick={(event) => handlers.handlePlusButtonClick(event , this.state , this.updateState)}>+</button>
                    </div>
                    }

                    { array.map(arr => {
                            return (
                                <CharacteristicsBox inputsValue={arr} 
                                handleBlur={(event) => handlers.handleCharactericsChange(event , this.state , this.updateState)}/>
                            );
                        })
                    }
                                
                </div>
                
                <input 
                    className={styles.submitButton} 
                    type="submit" 
                    value={this.props.page === 'create' ?'Create' :'Update'}
                    onClick={(event) => handleSubmit(event , this.state , this.props)}
                />

            </form>
        );

    };

};

export default withRouter(Form);