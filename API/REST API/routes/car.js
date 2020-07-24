const express = require('express');
const router = express.Router();
const {createCar , updateCar , deleteCar} = require('../controllers/car');

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
