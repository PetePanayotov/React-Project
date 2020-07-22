const User = require('../models/User')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('../config/config');
const cookieName = config.cookie;

const generateToken = async data => {
    const token = await jwt.sign(data , config.privateKey);
    return token;
};

const getUsers = async (req , res , next) => {

    try {
        
        const users = await User.find();
        
        if (!users) {
            throw new Error();
        };

        res.send(users);

    } catch (error) {
        next();
    };


};

const registerUser = async (req , res , next) => {
    
    const { username, password } = req.body;
   
    const salt =  await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password , salt);

    const newUser = new User({
        username: username,
        password: hashedPassword
    });

    console.log(newUser)

    try {

        const userObj = await newUser.save();

        if (!userObj) {
            throw new Error();
        };

        const token = await generateToken({ 
            userId: userObj._id,
            username: userObj.username
        });

        res.cookie(cookieName, token).send(userObj);

        
    } catch (error) {
        next();
    };
};

const loginUser = async (req , res , next) => {

    const {username , password} = req.body;

    try {
        
        const user = await User.findOne({username});

        if (!user) {
            throw new Error();
        };

        const passwordsMatch = await bcrypt.compare(password , user.password);
    
        if (passwordsMatch) {
            
            const token = await generateToken({ 
                userId: user._id,
                username: user.username
            });
    
            res.cookie(cookieName , token).send(user);

        }else{
            res.status(401).send('Invalid password');
            return;
        }
        
    } catch (error) {
        next();
    };

};

const logoutUser = (req , res , next) => {
  
    res.clearCookie(cookieName).send('Logout successfully');
};

const updatedUser = async (req , res , next) => {

    const {id} = req.params;
    const { username, password } = req.body;

    const salt =  await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password , salt);

    const newData = {
        username,
        password: hashedPassword
    }

    try {
        
        const updatedUser = await User.update({_id : id} , newData);

        if (!updatedUser) {
            throw new Error();
        };

        res.send(updatedUser);
        
    } catch (error) {
        next()
    };

};

const deleteUser = async (req , res , next) => {

    const {id} = req.params;

    try {

        const removedUser = await User.deleteOne({ _id: id});

        if (!removedUser) {
            throw new Error();
        };

        res.send(removedUser);

    } catch (error) {
        next();
    };
 
};


module.exports = {
    getUsers,
    registerUser,
    loginUser,
    logoutUser,
    updatedUser,
    deleteUser
}

// module.exports = {
//     get: (req, res, next) => {
//         models.User.find()
//             .then((users) => res.send(users))
//             .catch(next)
//     },

//     post: {
//         register: (req, res, next) => {
//             const { username, password } = req.body;
//             models.User.create({ username, password })
//                 .then((createdUser) => res.send(createdUser))
//                 .catch(next)
//         },

//         login: (req, res, next) => {
//             const { username, password } = req.body;
//             models.User.findOne({ username })
//                 .then((user) => Promise.all([user, user.matchPassword(password)]))
//                 .then(([user, match]) => {
//                     if (!match) {
//                         res.status(401).send('Invalid password');
//                         return;
//                     }

//                     const token = utils.jwt.createToken({ id: user._id });
//                     res.cookie(config.authCookieName, token).send(user);
//                 })
//                 .catch(next);
//         },

//         logout: (req, res, next) => {
//             const token = req.cookies[config.authCookieName];
//             console.log('-'.repeat(100));
//             console.log(token);
//             console.log('-'.repeat(100));
//             models.TokenBlacklist.create({ token })
//                 .then(() => {
//                     res.clearCookie(config.authCookieName).send('Logout successfully!');
//                 })
//                 .catch(next);
//         }
//     },

//     put: (req, res, next) => {
//         const id = req.params.id;
//         const { username, password } = req.body;
//         models.User.update({ _id: id }, { username, password })
//             .then((updatedUser) => res.send(updatedUser))
//             .catch(next)
//     },

//     delete: (req, res, next) => {
//         const id = req.params.id;
//         models.User.deleteOne({ _id: id })
//             .then((removedUser) => res.send(removedUser))
//             .catch(next)
//     }
// };