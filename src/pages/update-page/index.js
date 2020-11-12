import React , {useState , useEffect} from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import PageWrapper from '../../components/page-wrapper';
import Main from '../../components/main';
import Form from '../../components/form';
import Input from '../../components/create-Input-Fields';
import DescriptionInput from '../../components/description-Input';
import SubmitButton from '../../components/submit-button';
import Button from '../../components/button';
import getCreateInputFields from '../../utils/create-Input-Fields';
import Element from '../../components/random-element-div';
import handlers from '../../utils/create-page-handlers';
import getQueryValue from '../../utils/getQueryValue';
import types from './index.module.css';


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

const {handlePlusClick , handleSpecChange , update} = handlers;


const UpdatePage = () => {

    useEffect(() => {
        document.title = 'Update Page';
    } , []);

    const history = useHistory();
    const location = useLocation();
    const [state , setState] = useState(initialState);
    const {specifications , isVipOffer} = state;
    const inputFieldsArray = getCreateInputFields();

    useEffect(() => {

        const getCar = async () => {

            const id = getQueryValue(location);
            const url = `http://localhost:9999/api/car/${id}`
    
            const promise = await fetch(url);
            const response = await promise.json();
            const parsedSpecs = JSON.parse(response.specifications);
            
            setState({
                ...response,
                specifications: parsedSpecs
            });

        };

        getCar();

    }, [location]);


    return (
        <PageWrapper>
            <Main layout="forms">
                <Element type="crt-upd-first-div"/>
                    <Form page="update">                  
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
                            text="Update"
                            handler={(event) => update(event , state , history)}
                        /> 
                   </Form>
                <Element type="crt-upd-second-div"/>
            </Main>
        </PageWrapper>
    );

};

export default UpdatePage;