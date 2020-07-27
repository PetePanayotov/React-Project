const express = require('express');
const config = require('../config/config');
const router = express.Router();
const {getUsers , registerUser , loginUser , updatedUser , deleteUser , verifyUser} = require('../controllers/user');
const {validateRegistration} = require('../middleWares/');
const { verify } = require('jsonwebtoken');

router.get('/', async (req , res , next) => {
    
    await getUsers(req , res , next);

});

router.post('/register', validateRegistration , async (req , res , next) => {
    
    await registerUser(req , res , next);

});


router.post('/login', async (req , res , next) => {
    
    await loginUser(req , res , next);

});

router.post('/verify' , (req , res , next) => {

    verifyUser(req , res , next);

})

router.post('/logout', (req  , res) => {
    
    const cookieName = config.cookieName;
    res.clearCookie(cookieName).send('Logout successfully')
    
});

router.put('/:id', async (req , res , next) => {

    await updatedUser(req , res , next);

});

router.delete('/:id', async (req , res , next) => {
    
    await deleteUser(req , res , next);
})

module.exports = router;