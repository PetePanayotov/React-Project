const express = require('express');
const router = express.Router();
const {getAllCars , getCar , createCar , updateCar , deleteCar , likeCar} = require('../controllers/car');

router.get('/' , async (req , res , next) => {
    
    await getAllCars(req , res , next);

});

router.get('/:id' , async (req , res , next) => {

    await getCar(req , res , next);

});

router.post('/:id' , async (req , res , next) => {

    await likeCar(req , res , next);

});

router.post('/' , async (req , res, next) => {
    
    await createCar(req , res, next);
});

router.put('/:id' , async (req , res , next) => {

    await updateCar(req , res , next)

});

router.delete('/:id', async (req , res , next) => {
    
    await deleteCar(req , res , next);

});

module.exports = router;
