import React , {useState , useEffect} from 'react';
import {useHistory , useLocation} from 'react-router-dom';
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
import getQueryValue from '../../utils/getQueryValue';


const initialState =  {
    brand: '',
    _id: '',
    model: '',
    price: '',
    imageUrl: '',
    images: [''],
    specifications: [],
};

const {addNewSpecs , handleSpecChange, addNewImages , handleImageChange , update} = handlers;


const UpdatePage = () => {

    const history = useHistory();
    const location = useLocation();
    const [state , setState] = useState(initialState);
    const {specifications , isVipOffer , description , images} = state;
    const inputFieldsArray = getCreateInputFields();

    useEffect(() => {

        const getCar = async () => {

            const id = getQueryValue(location);
            const url = `http://localhost:9999/api/car/${id}`
    
            const promise = await fetch(url);
            const response = await promise.json();
            const parsedSpecs = JSON.parse(response.specifications);
            
            return setState({
                ...response,
                specifications: parsedSpecs
            });

        };
        
        document.title = 'Update Page';
        getCar();

    }, [location]);


    return (
        <PageWrapper>
            <Form page="update">                  
                <Wrapper styling="leftSide">

                    {
                        inputFieldsArray.map(({label , stateProperty , type} , index) => {
                            
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
                        })
                    }

                    <Wrapper styling="images-plus-btn-wrapper">
                        <Label styling="create-label" text="Images"/>
                        <Button 
                            text="+" 
                            type="plus" 
                            handler={(event) => addNewImages(event , setState , images)}
                        />
                    </Wrapper>

                    {
                        images.map((imgUrl , index) => {

                            const labelText = `Image ${index + 1}`

                            return (
                                <Wrapper styling="create-input-wrapper" key={index}>
                                    <Label styling="create-label" text={labelText}/>
                                    <Input
                                        type="text"
                                        styling="create-input"
                                        value={imgUrl}
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
                        text="Update"
                        handler={(event) => update(event , state , history)}
                    /> 
            </Form>
        </PageWrapper>
    );

};

export default UpdatePage;