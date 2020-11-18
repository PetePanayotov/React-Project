import React , {useState} from 'react';
import {useHistory} from 'react-router-dom';
import PageWrapper from '../../components/page-wrapper';
import Form from '../../components/form';
import Wrapper from '../../components/wrapper';
import Label from '../../components/label';
import Input from '../../components/input-field';
import CheckBox from '../../components/checkbox';
import DescriptionInput from '../../components/description-Input';
import SubmitButton from '../../components/submit-button';
import Button from '../../components/button';
import getCreateInputFields from '../../utils/create-Input-Fields';
import handlers from '../../utils/create-page-handlers';


const {addNewImages, handleImageChange , addNewSpecs , handleSpecChange , create} = handlers;

const initialState =  {
    brand: '',
    model: '',
    price: '',
    images: [],
    description: '',
    specifications: [],
    isVipOffer: false,
};


const CreatePage = () => {
    
    document.title = 'Create Page'

    const history = useHistory();
    const [state , setState] = useState(initialState);
    const {specifications , isVipOffer , description , images} = state;
    const inputFieldsArray = getCreateInputFields();


    return (

        <PageWrapper>
                <Form page="create">
                    <Wrapper styling="leftSide">

                        {inputFieldsArray.map(({label , stateProperty , type} , index) => {
                            return (
                                <Wrapper styling="create-input-wrapper" key={index}>
                                    <Label styling="create-label" text={label}/>
                                    <Input
                                        type={type}
                                        styling="create-input"
                                        value={state[stateProperty]}
                                        handler={(event) => setState({...state , [stateProperty]: event.target.value})}
                                    />
                                </Wrapper>
                            );
                        })}

                        <Wrapper styling="images-plus-btn-wrapper">
                            <Label styling="create-label" text="Images"/>
                            <Button 
                                text="+" 
                                type="plus" 
                                handler={(event) => addNewImages(event , setState , images)}
                            />
                        </Wrapper>

                        {
                            images.map((image , index) => {

                                const labelText = `Image ${index + 1}`

                                return (
                                    
                                    <Wrapper styling="create-input-wrapper" key={index}>
                                        <Label styling="create-label" text={labelText}/>
                                        <Input
                                            type="text"
                                            styling="create-input"
                                            value={image}
                                            handler={(event) => handleImageChange(event , setState , images , index)}
                                        />
                                    </Wrapper>
                                );

                            })
                        }

                        <Wrapper styling="create-input-wrapper">
                            <Label styling="create-label" text="Vip Offer"/>
                            <CheckBox
                                type="checkBox"
                                isChecked={isVipOffer}
                                label="Vip Offer"
                                handler={() => setState({...state , isVipOffer: !isVipOffer})}
                            />
                        </Wrapper>

                        <Wrapper styling="description-wrapper">
                            <Label styling="create-label" text="Description"/>
                            <DescriptionInput
                                description={description}
                                handler={(event) => setState({...state , description: event.target.value})}
                            />
                        </Wrapper>

                    </Wrapper>

                    <Wrapper styling="rightSide">

                        <Wrapper styling="specs-plus-btn-wrapper">
                            <Label styling="create-label" text="Specifications:"/>
                            <Button 
                                text="+" 
                                type="plus" 
                                handler={(event) => addNewSpecs(event , setState , specifications)}
                            />
                        </Wrapper>

                        {
                            specifications.map((arr , index) => {

                                const [specName , specValue] = arr;

                                return (
                                    <Wrapper styling="spec-input-wrapper" key={index}>
                                        <Input 
                                            type="text" 
                                            styling="spec-input" 
                                            value={specName} 
                                            handler={(event) => handleSpecChange(event , setState , specifications, index , 0)}
                                        />
                                        <Input 
                                            type="text"
                                            styling="spec-input"  
                                            value={specValue} 
                                            handler={(event) => handleSpecChange(event , setState , specifications , index , 1)}
                                        />
                                    </Wrapper>
                                );
                            })
                        } 

                    </Wrapper>

                    <SubmitButton
                        type="createUpdate"
                        text="Create"
                        handler={(event) => create(event , state , history)}
                    /> 
                </Form>
        </PageWrapper>
    );

};

export default CreatePage;