import React , {useState, useEffect, useCallback} from 'react';
import { useLocation } from 'react-router-dom';
import PageWrapper from '../../components/page-wrapper';
import Main from '../../components/main';
import CarDetails from '../../components/car-details';
import Title from '../../components/title';
import CommentsSection from '../../components/comments-section';
import getQueryValue from '../../utils/getQueryValue';


function DetailsPage() {

    const initialState = {
        comments: [],
        specifications: [],
        likes: [],
    }
    const [car , setCar] = useState(initialState);
    const location = useLocation();

    const getCars = useCallback(async () => {

        const id = getQueryValue(location);
        const url = `http://localhost:9999/api/car/${id}`

        const promise = await fetch(url);
        let response = await promise.json();
        response.specifications = JSON.parse(response.specifications);

        setCar(response);
    });

    useEffect(() => {

        document.title = 'Details Page';
        getCars()

    }, [getCars]);

    
    return(
        <PageWrapper>
            <Main layout="forms">
                <Title text={`${car.brand} ${car.model}`}/>
                <CarDetails car={car}/>
                <CommentsSection commentsArray={car.comments} carId={car._id}/>
            </Main>
        </PageWrapper>
    );

};

export default DetailsPage