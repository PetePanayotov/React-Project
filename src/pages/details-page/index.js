import React , {useContext, useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import UserContext from '../../Context';
import PageWrapper from '../../components/page-wrapper';
import CarDetails from '../../components/car-details';
import Title from '../../components/title';
import CommentsSection from '../../components/comments-section';
import getQueryValue from '../../utils/getQueryValue';


const DetailsPage = () => {

    const initialState = {
        specifications: [],
        likes: [],
        comments: []
    };

    const location = useLocation();
    const context = useContext(UserContext);
    const {isAdmin , user: {userId , username}} = context;
    const [car , setCar] = useState(initialState);
    const [pressed , setPressed] = useState(false);
    const {_id , brand , model , comments} = car;
    const title = `${brand} ${model}`;

    
    useEffect(() => {

        const getCar = async () => {

            const id = getQueryValue(location);
            const url = `http://localhost:9999/api/car/${id}`
    
            const promise = await fetch(url);
            const response = await promise.json();
            const parsedSpecs = JSON.parse(response.specifications);
            
            setCar({
                ...response,
                specifications: parsedSpecs
            });

        };

        getCar();
        
        document.title = `Catalog - ${title}`;

    }, [pressed , title , location]);

    return(
        <PageWrapper>
                <Title text={title}/>
                <CarDetails
                    isAdmin={isAdmin}
                    userId={userId}
                    car={car}
                    setPressed={setPressed}
                    pressed={pressed}
                />
                <Title text="Comments"/>
                <CommentsSection
                    username={username}
                    carId={_id} 
                    comments={comments}
                    pressed={pressed}
                    setPressed={setPressed}
                />
        </PageWrapper>
    );

};

export default DetailsPage