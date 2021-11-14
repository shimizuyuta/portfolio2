const mongoose = require('mongoose');
const ProfileSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    faculty: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    location: {
        type: Number,
        required: true,
    },
    experience:{
        type:Number,
        required: true,
    },
    skills : [{
        language : {Number,required: true,},
        history : {Number,required: true,}
         }],
    follows: {
        sportFollow: {
            type: String,
        },
        tradFollow: {
            type: String,
        }
    },
    word:{
        type:String
    },
    // social: {
    //     twitter: {
    //       type: String
    //     },
    // }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);