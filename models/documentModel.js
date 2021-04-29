const mongoose = require('mongoose');

const DocumentSchema = mongoose.Schema({
    dorm_id: {
        type: String,
        unique: true,
        required: true
    },
    regis_pic: {
        type: String,
        required: true
    },
    location_pic: {
        type: String,
        required: true
    }

});

const Document = mongoose.model('Document', DocumentSchema)

module.exports = Document;