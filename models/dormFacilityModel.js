const mongoose = require('mongoose');

const DormFacilitySchema = mongoose.Schema({
    dorm_facilities: {
        type: String,
        required: true
    },
    pic: {
        type: String,
        required: true
    }

});

const DormFacility = mongoose.model('DormFacility', DormFacilitySchema)

module.exports = DormFacility;