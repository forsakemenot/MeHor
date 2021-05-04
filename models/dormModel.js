const mongoose = require('mongoose');

const DormSchema = mongoose.Schema({
    isApprove: {
        type: Boolean,
        default: false,
        require: true
    },
    is_done: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: false
    },

    dorm_name: {
        type: String,
        // required: true
    },
    dorm_name_eng: {
        type: String,
        // required: true
    },
    dorm_type: {
        type: String,
        // required: true
    },
    dorm_zone: {
        type: String,
        // required: true
    },
    dorm_others: {
        type: String,
        // required: true
    },
    dorm_address: {
        address_number : {type: String},
        alley : {type: String},
        street : {type: String},
        province : {type: String},
        area : {type: String},
        district : {type: String},
        postcode : {type: String},

    },
    latitude: {
        type: Number,
        // required: true
    },
    longtitude: {
        type: Number,
        // required: true
    },
    description:{
        type: String,
        // required: true
    },
    owner_name:{
        type: String,
        // required: true
    },
    owner_phone:{
        type: String,
        // required: true
    },
    owner_office_phone:{
        type: String,
        // required: true
    },
    owner_line:{
        type: String,
        // required: true
    },
    owner_facebook:{
        type: String,
        // required: true
    },
    user:{
        type: String,
    }
    
    
    

});

const Dorm = mongoose.model('Dorm', DormSchema)

module.exports = Dorm;
