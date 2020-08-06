import React , {useState, useContext, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import UserContext from '../../Context';
import styles from './index.module.css';
import Car from '../car';
import getQueryValue from '../../utils/getQueryValue';


function Cars(props) {

    let [cars , setCars] = useState([]);
    const context = useContext(UserContext);
    const {page} = props;
    const {isAdmin} = context;
    const location = useLocation();
    const queryString = location.search;

    useEffect(() => {

        if (page === 'profile' && !isAdmin) {
            
            (async() => {
               
                const {userId} = props
                
                const url = `http://localhost:9999/api/user/${userId}`;
                
                const promise = await fetch(url);
               
                const user = await promise.json();
    
                let {likedCars} = user;
                likedCars = likedCars.reverse();
                
                setCars(likedCars);
    
            })();
    
        }else {
        
            (async() => {
    
                const url = 'http://localhost:9999/api/car/';
                const promise = await fetch(url);
                const response = await promise.json();
    
                let cars = response.slice(0);
    
                if (page === 'home') {
                
                    cars = cars.filter(car => car.isVipOffer === true);
    
                };
                cars = cars.reverse()
                setCars(cars);
    
            })();
    
        };

    });

    
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
            {cars.map((car , index) => {
                const {_id , brand , model , price , imageUrl , likes } = car;
                
                return (
                    <Car
                        page={page}
                        isAdmin={isAdmin}
                        likes={likes.length}
                        key={index}
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