import React, { useEffect, useState } from 'react';
import PageWrapper from '../../components/page-wrapper';
import CarsContainer from '../../components/wrapper'
import Car from '../../components/car';
import Title from '../../components/title';
import handlers from '../../utils/catalog-page-handlers';

const {getAllCars} = handlers;


const  UserHomePage = () => {

    const [vipOfferCars , setVipOfferCars] = useState([]);
    
    document.title = 'Home';
    
    useEffect(() => {

        const retrieveCars = async () => {
        
            const allCars = await getAllCars();
            
            setVipOfferCars(allCars.filter(car => car.isVipOffer === true));
        }

        retrieveCars();

    } , []);


    return(
        <PageWrapper>
                <Title text="Our best offers"/>
                <CarsContainer styling="cars-container">

                    {vipOfferCars.map((car) => {

                            const {_id , brand , model , price , likes , images} = car;

                            return (

                                <Car
                                    key={_id}
                                    likes={likes.length}
                                    id={_id}
                                    brand={brand}
                                    model={model}
                                    price={price}
                                    imageUrl={images[0]}    
                                />
                            
                            );
                    })}

                </CarsContainer>
        </PageWrapper>
    );
   
};

export default UserHomePage;