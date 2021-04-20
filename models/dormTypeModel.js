const mongoose = require('mongoose');

const DormTypeSchema = mongoose.Schema({
    dorm_id: {
        type: String,
        unique: true,
        required: true
    },
    dorm_type: [{
        room_name : {type: String ,  required: true},
        room_area : {type: String ,  required: true},
        room_cost : {type: String ,  required: true},
        additional : {type: String ,  required: true}
    }],
    insurance_bill: {
        type: String,
        unique: true,
        required: true
    },
    pre_paid: {
        type: String,
        unique: true,
        required: true
    },
    electric_bill: {
        type: String,
        required: true
    },
    water_bill: {
        type: String,
        default: false,
        required: true
    },
    internet_bill:{
        type: String,
        required: true
    },
    keycard:{
        type: String,
        required: true
    }

});

const DormType = mongoose.model('DormType', DormTypeSchema)

module.exports = DormType;
