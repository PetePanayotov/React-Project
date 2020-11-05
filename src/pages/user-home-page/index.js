import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../../Context';
import PageWrapper from '../../components/page-wrapper';
import Main from '../../components/main';
import Cars from '../../components/cars-container';
import Car from '../../components/car';
import Title from '../../components/title';


function UserHomePage() {

    const context = useContext(UserContext);
    const {cars} = context;
    const [vipOfferCars , setVipOfferCars] = useState([]);

    useEffect(() => {

        document.title = 'Home';
        setVipOfferCars(cars.filter(car => car.isVipOffer === true));

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