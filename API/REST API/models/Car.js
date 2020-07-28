const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({

    model: {
        type: String,
        required: true,

    },

    price: {
        type: Number,
        required: true,
       
    },

    imageUrl: {
        type: String,
        required: true
    },

    description : {
        type: String,
        required: true
    },

    likes: [
        {
            type: 'ObjectId',
            required: true,
            ref: 'User'
        }
    ],

    isVipOffer: {
        type: Boolean,
        required: true
    },

    characteristics: {
            required: true,
            type: String
        }
    


});

module.exports = mongoose.model('Car' , CarSchema);