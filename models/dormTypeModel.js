const mongoose = require('mongoose');

const DormTypeSchema = mongoose.Schema({

    dorm_id: {
        type: String,
        unique: true,
        
    },
    dorm_type: [{
        room_name : {type: String ,  },
        room_area : {type: String ,  },
        room_cost : {type: String ,  },
        additional : {type: String ,  }
    }],
    insurance_bill: {
        type: String,
        
    },
    pre_paid: {
        type: String,
        
    },
    electric_bill: {
        type: String,
        
    },
    water_bill: {
        type: String,
        default: false,
        
    },
    internet_bill:{
        type: String,
        
    },
    keycard:{
        type: String,
        
    }

});

const DormType = mongoose.model('DormType', DormTypeSchema)

module.exports = DormType;
