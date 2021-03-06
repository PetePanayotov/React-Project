const Car = require('../models/Car');
const User = require('../models/User');


const getAllCars = async (req , res, next) => {
   
    try {
        
        const cars = await Car.find();

        if (!cars) {
            throw new Error();
        };

        res.status(200).send(cars)

    } catch (error) {
        res.status(503);
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

    const data = {
        ...req.body,
        specifications: JSON.stringify(req.body.specifications)
    };
    
    const newCar = new Car(data);
    
    try {
        
        const carObj = await newCar.save();

        if (!carObj) {
            throw new Error();
        };

        res.status(200).send(newCar)
        
    } catch (error) {
        res.status(500).send({})
        next()
    };

};

const updateCar = async (req , res , next) => {

    const {_id , specifications} = req.body;
    const stringifiedSpecs = JSON.stringify(specifications);
    const newData = {...req.body , specifications: stringifiedSpecs};
    
    try {
        
        const filter = {_id}
        const updatedCar = await Car.updateOne(filter , newData);
        
        if (!updatedCar) {
            throw new Error();
        };

        res.status(200).send(updatedCar)
        
    } catch (error) {
        res.status(404).send({})
        next()
    };

};

const likeCar = async (req , res , next) => {
    
    const {id} = req.params;
    const {userId} = req.body;

    try {
        const car = await Car.findOneAndUpdate({_id: id} , {

                $addToSet: {
                    likes: [userId]
                }
                
            });

        const user = await User.findOneAndUpdate({_id: userId} , {
            $addToSet: {
                likedCars: [id]
            }
        })

        if (!car || !user) {
            throw new Error();
        };

        res.send(car);
        
    } catch (error) {
        next()
    }


};

const dislikeCar = async (req ,res) => {

    const {id} = req.params;
    const {userId} = req.body;

    try {
        const car = await Car.findOneAndUpdate({_id: id} , {

                $pull: {
                    likes: {$in: [userId]}
                }
                
            });

        const user = await User.findOneAndUpdate({_id: userId} , {
            $pull: {
                likedCars: {$in: [id]}
            }
        })

        if (!car || !user) {
            throw new Error();
        };

        res.send('All clear');
        
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

const commentCar = async (req , res , next) => {

    const {username , comment , time} = req.body;
    const {id} = req.params;

    const newComment = JSON.stringify([username , comment , time]);

    try {
        
        const car = await Car.findOneAndUpdate({_id: id} , {

            $addToSet: {
                comments: [newComment]
            }

        });

        if (!car) {
            throw new Error();
        };

        res.send(car);
        
    } catch (error) {
        next();
    };

};

const removeComment = async (req , res , next) => {

    const {comment} = req.body;
    const {id} = req.params;

    try {

        const car = await Car.findOneAndUpdate({_id: id} , {

            $pull: {
                comments: {$in: [comment]}
            }
            
        });

        if (!car) {
            throw new Error();
        };

        res.send('All clear');
        
    } catch (error) {
        next();
    };

};

module.exports = {
    getAllCars,
    getCar,
    createCar,
    updateCar,
    deleteCar,
    likeCar,
    dislikeCar,
    commentCar,
    removeComment
}



