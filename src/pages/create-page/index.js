import React , {Component} from 'react';
import PageWrapper from '../../components/page-wrapper';
import Main from '../../components/main';
import styles from './index.module.css';
import CharacteristicsBox from '../../components/characteristicsInput';
import Input from '../../components/createInputFields';
import DescriptionInput from '../../components/descriptionInput';
import getCreateInputFields from '../../utils/createInputFields';
import submitHandlers from '../../utils/submitHandlers';



class CreatePage extends Component{

    constructor(props) {
        super(props);

        this.state = {
            model: '',
            price: '',
            imageUrl: '',
            description: '',
            characteristicsObj: {},
            isVipOffer: false,
            counter: []
        }
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
        
        newState[stateProperty] = !(this.state[stateProperty]);
        this.setState(newState);

    };

    handleCharactericsChange = (event) => {

        const parent = event.target.parentNode;
 
        const inputs = Array.from(parent.children);
        const [firstInput , secondInput] = inputs;
        const property = firstInput.value;
        const value = secondInput.value;

        this.setState(() => {
            this.state.characteristicsObj[property] = value;
        })

    }

    handleButtonClick = (event) => {
     
        event.preventDefault();
       
        const currentCounter = this.state.counter;
       
        currentCounter.push(0);
        
        const newState = {};
        
        newState.counter = currentCounter;
        
        this.setState(newState)

    }

    render() {

        const array = this.state.counter;
        const inputFieldsArray = getCreateInputFields();
       
        return (

            <PageWrapper>
                <Main>
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
                                    Specifications
                                </label>
                                <button className={styles.button} onClick={(event) => this.handleButtonClick(event)}>+</button>
                            </div>

                            { array.map(zero => {
                                    return (
                                        <CharacteristicsBox handleBlur={(event) => this.handleCharactericsChange(event)}/>
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

                </Main>
            </PageWrapper>

        );

    };

};


export default CreatePage;