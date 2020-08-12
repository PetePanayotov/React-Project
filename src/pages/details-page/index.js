import React , {useState} from 'react';
import PageWrapper from '../../components/page-wrapper';
import Main from '../../components/main';
import CarDetails from '../../components/car-details';
import Title from '../../components/title';
import CommentsSection from '../../components/comments-section';


function DetailsPage() {

    const [title , setTitle] = useState('');

    return(
        <PageWrapper>
            <Main layout="forms">
                <Title text={title}/>
                <CarDetails setParentState={setTitle}/>
                <Title text="Comments"/>
                <CommentsSection/>
            </Main>
        </PageWrapper>
    );

};

export default DetailsPage