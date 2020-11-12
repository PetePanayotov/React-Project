import React , {useState} from 'react';
import {useHistory} from 'react-router-dom';
import PageWrapper from '../../components/page-wrapper';
import Main from '../../components/main';
import Form from '../../components/form';
import Input from '../../components/create-Input-Fields';
import DescriptionInput from '../../components/description-Input';
import SubmitButton from '../../components/submit-button';
import Button from '../../components/button';
import Element from '../../components/random-element-div';
import getCreateInputFields from '../../utils/create-Input-Fields';
import handlers from '../../utils/create-page-handlers';
import types from './index.module.css';


const {handlePlusClick , handleSpecChange , create} = handlers;

const initialState =  {
    brand: '',
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
                <Element type="crt-upd-first-div"/>
                <Form page="create">

                        <Element type="leftSide">

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
                                isChecked={isVipOffer}
                                label="Vip Offer"
                                stateValue={isVipOffer}
                                handler={() => setState({...state , isVipOffer: !isVipOffer})}
                            />

                            <DescriptionInput
                                description={state.description}
                                handler={(event) => setState({...state , description: event.target.value})}
                            />

                        </Element>

                        <Element type="rightSide">

                            <div className={types['plus-btn-wrapper']}>
                                <label className={types.label}>
                                    Specifications:
                                </label>
                                <Button text="+" type="plus" handler={(event) => handlePlusClick(event , setState , specifications)}/>
                            </div>

                            {

                                specifications.map((arr , index) => {

                                    const [spec , value] = arr;

                                    return (

                                        <div className={types['spec-input-wrapper']} key={index}>
                                            <input value={spec} className={types.specInput} onChange={(event) => handleSpecChange(event , setState ,specifications, index , 0)}/>
                                            <input value={value} className={types.specInput} onChange={(event) => handleSpecChange(event , setState ,specifications , index , 1)}/>
                                        </div>
                                    );
                                })
                            } 

                        </Element>

                        <SubmitButton
                            type="createUpdate"
                            text="Create"
                            handler={(event) => create(event , state , history)}
                        /> 

                </Form>
                <Element type="crt-upd-second-div"/>
            </Main>
        </PageWrapper>
    );

};

export default CreatePage;