const getUserLikedCars = async (userId) => {
   
    const url = `http://localhost:9999/api/user/${userId}`;
    const promise = await fetch(url);
    const user = await promise.json();
       
    let {likedCars} = user;
    likedCars = likedCars.reverse();
    
    return likedCars;
};

const getAllCars = async (page) => {
    
    const url = 'http://localhost:9999/api/car/';
    const promise = await fetch(url);
    const response = await promise.json();
    
    let cars = response.slice(0);
    
    if (page === 'home') {
    
        cars = cars.filter(car => car.isVipOffer === true);
    };
    cars = cars.reverse()
    
    return cars;
};


export default {
    getAllCars,
    getUserLikedCars
};