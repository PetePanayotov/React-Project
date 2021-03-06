import React, { useState, useContext, useEffect } from 'react'
import UserContext from '../../Context';
import PageWrapper from '../../components/page-wrapper';
import CarsContainer from '../../components/wrapper';
import Car from '../../components/car';
import Title from '../../components/title';
import getGreeting from '../../utils/getGreeting';
import handlers from '../../utils/catalog-page-handlers';

const {getAllCars} = handlers;


const  ProfilePage = () => {

    const [cars , setCars] = useState([]);
    const context = useContext(UserContext);
    const {isAdmin , user: {userId , username}} = context;


    useEffect(() => {
      
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

        getCars();

        document.title = username;
       
    } , [username , isAdmin , userId]);

    const time = new Date();
    const hour = time.getHours()
    const newGreeting = getGreeting(hour , isAdmin , username);


    return (
            <PageWrapper>
                <Title text={newGreeting}/>
                <CarsContainer styling="cars-container">
                    
                    {
                        cars.length === 0 &&
                        <p>This section is empty</p>
                    }

                    {
                        cars.map((car) => {

                            const {_id , brand , model , price , likes , images} = car;

                            return (
                            
                                <Car
                                    key={_id}
                                    isAdmin={isAdmin}
                                    page="profile"
                                    likes={likes.length}
                                    id={_id}
                                    brand={brand}
                                    model={model}
                                    price={price}
                                    imageUrl={images[0]}    
                                />
                            
                            );
                        })
                    
                    }

                </CarsContainer>
            </PageWrapper>
        );
    
};

export default ProfilePage;