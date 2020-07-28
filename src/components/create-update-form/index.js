import React , {Component} from 'react';
import {withRouter} from 'react-router-dom';
import styles from './index.module.css';
import CharacteristicsBox from '../specifications-Input';
import Input from '../create-Input-Fields';
import DescriptionInput from '../description-Input';
import getCreateInputFields from '../../utils/createInputFields';
import submitHandlers from '../../utils/submitHandlers';

class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {
            brand: '',
            model: '',
            price: '',
            imageUrl: '',
            description: '',
            specifications: [],
            isVipOffer: false,
            
        };
    };

    handleChange = (event , stateProperty) => {

        const eventTargetType = event.target.type;
        
        if (eventTargetType === 'text' || eventTargetType === 'textarea') {
            
            const newState = {};
    
            newState[stateProperty] = event.target.value;
    
            this.setState(newState);
         
            return;
        };

        const newState = {};
        
        newState['isVipOffer'] = !(this.state['isVipOffer']);
        this.setState(newState);

    };

    handleCharactericsChange = (event) => {

        const parent = event.target.parentNode;
 
        const inputs = Array.from(parent.children);
        const [firstInput , secondInput] = inputs;
        const property = firstInput.value;
        const value = secondInput.value;

        const currentSpecs = this.state.specifications.slice(0);
        const lastElement = currentSpecs.length - 1;
        currentSpecs[lastElement] = [property , value];

        this.setState({
            specifications: currentSpecs
        });

    };

    handleButtonClick = (event) => {
     
        event.preventDefault();
       
        const currentSpecifications = this.state.specifications.slice(0);
        currentSpecifications.push([]);

        this.setState({
            specifications: currentSpecifications
        });

    };

    componentDidMount() {

        if (this.props.page === 'update') {
            
        
            (async() => {

                const promise = await fetch('http://localhost:9999/api/car/5f20504eb77171112417672d');
                const response = await promise.json();
                response.specifications = JSON.parse(response.specifications)

                this.setState(response)

            })()

        }

};

    render() {

        const array = this.state.specifications;
        const inputFieldsArray = getCreateInputFields();

        return (
            <form className={styles.form}>

                        <div className={styles.leftDiv}>

                            {inputFieldsArray.map(({label , stateProperty , type}) => {

                                return <Input
                                    type={type}
                                    label={label}
                                    stateValue={this.state[stateProperty]}
                                    handler={(event) => {this.handleChange(event , stateProperty)}}
                                />

                            })}

                            <DescriptionInput
                                description={this.state.description}
                                handler={(event) => {this.handleChange(event , 'description')}}
                            />

                        </div>

                        <div className={styles.rightDiv}>

                            <div className={styles.buttonDiv}>
                                <label className={styles.label}>
                                    Specifications:
                                </label>
                                <button className={styles.button} onClick={(event) => this.handleButtonClick(event)}>+</button>
                            </div>

                                { array.map(arr => {

                                        return (
                                            <CharacteristicsBox inputsValue={arr} handleBlur={(event) => this.handleCharactericsChange(event)}/>
                                        )
                                    })

                                }
                                
                        </div>
                        <input 
                            className={styles.submitButton} 
                            type="submit" 
                            value="Create"
                            onClick={(event) => submitHandlers.create(event , this.state , this.props)}
                        />
                    </form>
        );

    };

};

export default withRouter(Form);