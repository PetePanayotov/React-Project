const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    username: {
        type: String,
        unique: true,
        required: true,

    },

    password: {
        type: String,
        required: true,
       
    },

    isAdmin: {
        type: Boolean,
        default: false
    },

    likedCars: [
        {
            type: 'ObjectId',
            ref: 'Car'
        }
    ]

});

module.exports = mongoose.model('User' , UserSchema);
