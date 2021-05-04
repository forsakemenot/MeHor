const mongoose = require('mongoose');

const DormFacilitySchema = mongoose.Schema({
    dorm_id: {
        type: String,
        unique: true,
        required: true
    },
    dorm_facilities: [{
        type: String,
        required: true
    }],
    img: [{
        type: String,
        required: true
    }],
    dorm_id: {
        type: String,
        unique: true,
        required: true
    }

});

const DormFacility = mongoose.model('DormFacility', DormFacilitySchema)

module.exports = DormFacility;