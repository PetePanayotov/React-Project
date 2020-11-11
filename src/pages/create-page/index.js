import React , {useState} from 'react';
import {useHistory} from 'react-router-dom';
import PageWrapper from '../../components/page-wrapper';
import Main from '../../components/main';
import Form from '../../components/create-update-form';
import Input from '../../components/create-Input-Fields';
import DescriptionInput from '../../components/description-Input';
import SubmitButton from '../../components/submit-button';
import Button from '../../components/button';
import getCreateInputFields from '../../utils/create-Input-Fields';
import handlers from '../../utils/create-page-handlers';
import styles from './index.module.css';


const {handlePlusClick , handleSpecChange , handleSubmit} = handlers;

const initialState =  {
    brand: '',
    _id: '',
    model: '',
    price: '',
    imageUrl: '',
    description: '',
    specifications: [],
    isVipOffer: false,

};


const CreatePage = () => {
    
    document.title = 'Create Page'

    const history = useHistory();
    const [state , setState] = useState(initialState);
    const {specifications , isVipOffer} = state;
    const inputFieldsArray = getCreateInputFields();


    return (

        <PageWrapper>
            <Main layout="forms">
                <div className={styles.firstDiv}></div>
                <Form page="create">

                        <div className={styles.leftSide}>

                            {inputFieldsArray.map(({label , stateProperty , type} , index) => {
                                return (
                                    <Input
                                        key={index}
                                        type={type}
                                        label={label}
                                        value={state[stateProperty]}
                                        handler={(event) => setState({...state , [stateProperty]: event.target.value})}
                                    />
                                )
                            })}

                            <Input
                                type="checkBox"
                                isChecked={state.isVipOffer}
                                label="Vip Offer"
                                stateValue={state.isVipOffer}
                                handler={() => setState({...state , isVipOffer: !isVipOffer})}
                            />

                            <DescriptionInput
                                description={state.description}
                                handler={(event) => setState({...state , description: event.target.value})}
                            />

                        </div>

                        <div className={styles.rightSide}>

                            <div className={styles['plus-btn-wrapper']}>
                                <label className={styles.label}>
                                    Specifications:
                                </label>
                                <Button text="+" type="plus" handler={(event) => handlePlusClick(event , setState , specifications)}/>
                            </div>

                            {

                                specifications.map((arr , i) => {

                                    const [spec , value] = arr;

                                    return (
                                        <div className={styles['spec-input-wrapper']} key={i}>
                                            <input value={spec} className={styles.specName} onChange={(event) => handleSpecChange(event , setState ,specifications , 0)}/>
                                            :
                                            <input value={value} className={styles.specValue} onChange={(event) => handleSpecChange(event , setState ,specifications , 1)}/>
                                        </div>
                                    );
                                })
                            } 

                        </div>

                        <SubmitButton
                            type="createUpdate"
                            text="Create"
                            handler={(event) => handleSubmit(event , state , history)}
                        /> 

                </Form>
                <div className={styles.secondDiv}></div>
            </Main>
        </PageWrapper>
    );

};

export default CreatePage;