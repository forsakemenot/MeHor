const mongoose = require('mongoose');

const DocumentSchema = mongoose.Schema({
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