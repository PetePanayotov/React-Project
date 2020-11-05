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


function ProfilePage() {

    const [greeting , setGreeting] = useState('');
    const [filteredCars , setFilteredCars] = useState([]);
    const context = useContext(UserContext);
    const {isAdmin , user: {userId , username} ,  cars , login} = context;

    const getUserLikedCars = async () => {

        const allCars = await getAllCars();

        const likedCars = allCars.filter(car => car.likes.indexOf(userId) !== -1);

        return setFilteredCars(likedCars)
      
    };

    useEffect(() => {

        document.title = "Profile Page";
        
        const time = new Date();
        const hour = time.getHours()
        const newGreeting = getGreeting(hour , isAdmin , username);

        setGreeting(newGreeting);

        if (isAdmin) {
            
            const orderedByLikes = cars.sort((firstCar , secondCar) => {

                const firstLikes = firstCar.likes.length;
                const secondLikes = secondCar.likes.length;


                return secondLikes - firstLikes;

            });

            const topTenCars = orderedByLikes.slice(0 , 10);

            return setFilteredCars(topTenCars);
        };

        getUserLikedCars();
       
    } , []);



    return(
            <PageWrapper>
                <Main layout="forms">
                    <Title text={greeting}/>
                    <Cars>

                        {filteredCars.map((car) => {

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
        )
    
};

export default ProfilePage;