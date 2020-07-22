const config = require('../config/config');
const router = require('express').Router();
const {getUsers , registerUser , loginUser , updatedUser , deleteUser} = require('../controllers/user');

router.post('/register' , async (req , res , next) => {
    
    await registerUser(req , res , next);

});

router.get('/', async (req , res , next) => {
    
    await getUsers(req , res , next);

});

router.post('/login', async (req , res , next) => {
    
    await loginUser(req , res , next);

});

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