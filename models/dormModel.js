const mongoose = require('mongoose');

const DormSchema = mongoose.Schema({
    dorm_name: {
        type: String,
        required: true
    },
    dorm_name_eng: {
        type: String,
        unique: true,
        required: true
    },
    dorm_type: {
        type: String,
        unique: true,
        required: true
    },
    latitude: {
        type: float,
        required: true
    },
    longtitude: {
        type: float,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    owner_name:{
        type: String,
        required: true
    },
    owner_phone:{
        type: String,
        required: true
    },
    owner_office_phone:{
        type: String,
        required: true
    },
    owner_line:{
        type: String,
        required: true
    },
    owner_facebook:{
        type: String,
        required: true
    }
    
    
    

});

const Dorm = mongoose.model('Dorm', DormSchema)

module.exports = Dmor;
