import React, { useEffect, useState } from 'react';
import PageWrapper from '../../components/page-wrapper';
import Main from '../../components/main';
import Cars from '../../components/cars-container';
import Car from '../../components/car';
import Title from '../../components/title';
import handlers from '../../utils/catalog-page-handlers';

const {getAllCars} = handlers;


const  UserHomePage = () => {

    const [vipOfferCars , setVipOfferCars] = useState([]);

    const retrieveCars = async () => {
        
        const allCars = await getAllCars();
        
        setVipOfferCars(allCars.filter(car => car.isVipOffer === true));
    }

    useEffect(() => {

        document.title = 'Home';
        retrieveCars();

    } , []);


    return(
        <PageWrapper>
            <Main layout="forms">
                <Title text="Our best offers"/>
                <Cars>

                    {vipOfferCars.map((car) => {

                            const {_id , brand , model , price , imageUrl , likes } = car;

                            return (

                                <Car
                                    key={_id}
                                    likes={likes.length}
                                    id={_id}
                                    brand={brand}
                                    model={model}
                                    price={price}
                                    imageUrl={imageUrl}    
                                />
                            
                            );
                    })}

                </Cars>
            </Main>
        </PageWrapper>
    );
   
};

export default UserHomePage;