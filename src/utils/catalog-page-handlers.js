const getUserLikedCars = async (userId) => {
   
    const url = `http://localhost:9999/api/user/${userId}`;
    const promise = await fetch(url);
    const user = await promise.json();
       
    let {likedCars} = user;
    likedCars = likedCars.reverse();
    
    return likedCars;
};

const getAllCars = async () => {
    
    const url = 'http://localhost:9999/api/car/';
    const promise = await fetch(url);

    if (promise.status !== 200) {
        return console.error('Something went wrong');
    };
    
    const response = await promise.json();
    
    let cars = response.slice(0);

    cars = cars.reverse()

    return cars;
};

const filterCars = (allCars , filtersArray , setFilteredCars) => {

    if (filtersArray.length === 0) {
        return setFilteredCars(allCars.slice(0));
    };

    const filteredCars = allCars.filter(car => filtersArray.indexOf(car.brand) !==-1);

    return setFilteredCars(filteredCars);

};


export default {
    getAllCars,
    getUserLikedCars,
    filterCars
};