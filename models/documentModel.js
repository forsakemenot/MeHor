const mongoose = require('mongoose');

const DocumentSchema = mongoose.Schema({
    registration_image: {
        type: String,
        required: true
    },
    location_image: {
        type: String,
        required: true
    }

});

const Document = mongoose.model('Document', DocumentSchema)

module.exports = Document;