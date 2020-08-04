const Car = require('../models/Car');


const getAllCars = async (req , res, next) => {

    try {
        
        const cars = await Car.find();
        
        if (!cars) {
            throw new Error();
        };

        res.send(cars);

    } catch (error) {
        next();
    };

};

const getCar = async (req , res , next) => {

    const {id} = req.params;

    try {
        
        const car  = await Car.findOne({_id: id});
        
        if (!car) {
            throw new Error()
        };

        res.send(car);
        
    } catch (error) {
        next()
    };


};

const createCar = async (req , res , next) => {

    let {brand , model , price , imageUrl , description , isVipOffer , specifications} = req.body;
    
    specifications = JSON.stringify(specifications);
    
    const newCar = new Car({brand , model , price , imageUrl , description , isVipOffer , specifications});
    
    try {
        
        const carObj = await newCar.save();
        if (!carObj) {
            throw new Error();
        }


        res.send(newCar)
        
    } catch (error) {
        console.log('Something is wrong' , error)
        next()
    }


};

const updateCar = async (req , res , next) => {

    const {id} = req.params;
    const {model , price , imageUrl , description , isVipOffer} = req.body;
    const newData = {model , price , imageUrl , description , isVipOffer};

    try {
        
        const updatedCar = await Car.update({ _id: id } , newData);
        
        if (!updatedCar) {
            throw new Error();
        };

        res.send(updatedCar)
        
    } catch (error) {
        next()
    };

};

const likeCar = async (req , res , next) => {
    
    const {id} = req.params;
    const {userId} = req.body;

    try {
        const car = await Car.findByIdAndUpdate(id , {

                $addToSet: {
                    likes: [userId]
                }
                
            })

        if (!car) {
            throw new Error();
        };

        res.send(car);
        
    } catch (error) {
        next()
    }


};

const deleteCar = async (req , res , next) => {

    const {id} = req.params;

    try {
        
        const removedCar = await Car.deleteOne({_id: id});

        if (!removedCar) {
            throw new Error();

        };

        res.send(removedCar);
        
    } catch (error) {
        next()
    }




};

module.exports = {
    getAllCars,
    getCar,
    createCar,
    updateCar,
    deleteCar,
    likeCar
}

// module.exports = {
//     get: (req, res, next) => {
//         models.Origami.find().populate('author')
//             .then((origamies) => res.send(origamies))
//             .catch(next);
//     },

//     post: (req, res, next) => {
//         const { description } = req.body;
//         const { _id } = req.user;

//         models.Origami.create({ description, author: _id })
//             .then((createdOrigami) => {
//                 return Promise.all([
//                     models.User.updateOne({ _id }, { $push: { posts: createdOrigami } }),
//                     models.Origami.findOne({ _id: createdOrigami._id })
//                 ]);
//             })
//             .then(([modifiedObj, origamiObj]) => {
//                 res.send(origamiObj);
//             })
//             .catch(next);
//     },

//     put: (req, res, next) => {
//         const id = req.params.id;
//         const { description } = req.body;
//         models.Origami.updateOne({ _id: id }, { description })
//             .then((updatedOrigami) => res.send(updatedOrigami))
//             .catch(next)
//     },

//     delete: (req, res, next) => {
//         const id = req.params.id;
//         models.Origami.deleteOne({ _id: id })
//             .then((removedOrigami) => res.send(removedOrigami))
//             .catch(next)
//     }
// };


