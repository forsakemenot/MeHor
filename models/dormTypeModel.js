const mongoose = require('mongoose');

const DormTypeSchema = mongoose.Schema({
    dorm_type: {
        type: Object,
        required: true
    },
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
        type: Boolean,
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
