import React , {Component} from 'react';
import {withRouter} from 'react-router-dom';
import styles from './index.module.css';
import SpecificationsBox from '../specifications-Input';
import Input from '../create-Input-Fields';
import DescriptionInput from '../description-Input';
import SubmitButton from '../submit-button';
import Button from '../button';
import getCreateInputFields from '../../utils/create-Input-Fields';
import submitHandlers from '../../utils/submitHandlers';
import handlers from '../../utils/create-form-handlers';
import getQueryValue from '../../utils/getQueryValue';

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

            const id = getQueryValue(this.props.location);
            
            (async() => {

                const promise = await fetch(`http://localhost:9999/api/car/${id}`);
                const response = await promise.json();
                response.specifications = JSON.parse(response.specifications)

                this.setState(response)

            })();

        };

    };

    render() {
        
        const {page} = this.props
        const array = this.state.specifications;
        const inputFieldsArray = getCreateInputFields();
        const handleSubmit = submitHandlers[page];
        
        return (
            <form className={styles.form}>

                <div className={styles.leftDiv}>

                    {inputFieldsArray.map(({label , stateProperty , type} , index) => {
                        return (
                            <Input
                                key={index}
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

                    {page === 'create' &&

                        <div className={styles.buttonDiv}>
                            <label className={styles.label}>
                                Specifications:
                            </label>
                            <Button text="+" type="plus" handler={(event) => handlers.handlePlusButtonClick(event , this.state , this.updateState)}/>

                        </div>
                    }

                    {page === 'create' && 
                        
                        array.map((arr , i) => {
                            return (
                                <SpecificationsBox key={i} inputsValue={arr} 
                                handleBlur={(event) => handlers.handleCharactericsChange(event , this.state , this.updateState)}/>
                            );
                        })
                    }
                                
                </div>

                <SubmitButton
                    type="createUpdate"
                    text={page === 'create' ? 'Create' : 'Update'}
                    handler={(event) => handleSubmit(event , this.state , this.props)}
                />

            </form>
        );

    };

};

export default withRouter(Form);