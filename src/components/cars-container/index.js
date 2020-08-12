import React , {useState, useContext, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import UserContext from '../../Context';
import styles from './index.module.css';
import Car from '../car';
import getQueryValue from '../../utils/getQueryValue';
import handlers from '../../utils/catalog-page-handlers';


function Cars({page , userId}) {

    let [cars , setCars] = useState([]);
    const context = useContext(UserContext);
    const {isAdmin} = context;
    const location = useLocation();
    const queryString = location.search;
    const {getUserLikedCars , getAllCars} = handlers;

    useEffect(() => {

        if (page === 'profile' && !isAdmin) {
            
            (async () => {
                const likedCars = await getUserLikedCars(userId);
                setCars(likedCars);
            })();
            
        }else {
        
            (async () => {
                const allCars = await getAllCars(page);
                setCars(allCars);
            })();
    
        };

    } , []);

    if (page === 'catalog'  && queryString !== '') {
        
        const brand = getQueryValue(location);
        cars = cars.filter(car => car.brand.toLowerCase() === brand);
        
    }else if(page === 'profile' && isAdmin) {

        cars = cars.sort((a , b) => {
            
            const firstLikes = a.likes.length;
            const secondLikes = b.likes.length;
            
            return secondLikes - firstLikes;
        });
        
        cars = cars.slice(0 , 10);
        
    };

    return (
        <div className={styles.container}>
            {cars.map((car ) => {
                const {_id , brand , model , price , imageUrl , likes } = car;

                return (
                    <Car
                        key={_id}
                        page={page}
                        isAdmin={isAdmin}
                        likes={likes.length}
                        id={_id}
                        brand={brand}
                        model={model}
                        price={price}
                        imageUrl={imageUrl}    
                    />
                
                );
            })}
        </div>
    );
      
};

export default Cars;