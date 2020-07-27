const validateRegistration = (req , res , next) => {

    let allClear = true;

    const {username , password} = req.body;

    if (username === 'admin' || password === 'admin') {
      
        allClear = false;
        
    };

    req.params.statusOfRegistration = allClear;

    next();

};


module.exports = {
    validateRegistration
}