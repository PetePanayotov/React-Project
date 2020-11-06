import React, { useState, useContext, useEffect } from 'react'
import UserContext from '../../Context';
import PageWrapper from '../../components/page-wrapper';
import Main from '../../components/main';
import Cars from '../../components/cars-container';
import Car from '../../components/car';
import Title from '../../components/title';
import getGreeting from '../../utils/getGreeting';
import handlers from '../../utils/catalog-page-handlers';

const {getAllCars} = handlers;


const  ProfilePage = () => {

    const [cars , setCars] = useState([]);
    const context = useContext(UserContext);
    const {isAdmin , user: {userId , username}} = context;

    const getCars = async () => {

        const allCars = await getAllCars();

        if (isAdmin) {
            
            const orderedByLikes = allCars.sort((firstCar , secondCar) => {

                const firstLikes = firstCar.likes.length;
                const secondLikes = secondCar.likes.length;

                return secondLikes - firstLikes;

            });

            const topTenCars = orderedByLikes.slice(0 , 10);

            return setCars(topTenCars);
        };
        
        const likedCars = allCars.filter(car => car.likes.indexOf(userId) !== -1);

        return setCars(likedCars)

    };

    useEffect(() => {

        document.title = username;

        getCars();
       
    } , []);


    const time = new Date();
    const hour = time.getHours()
    const newGreeting = getGreeting(hour , isAdmin , username);


    return(
            <PageWrapper>
                <Main layout="forms">
                    <Title text={newGreeting}/>
                    <Cars>

                        {
                            cars.length === 0 &&

                            <p>This section is empty</p>
                        }

                        {
                            cars.map((car) => {

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
                            })
                        
                        } 

                    </Cars>
                </Main>
            </PageWrapper>
        );
    
};

export default ProfilePage;