const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LocationSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    lng: {
        type: String,
        required: true
    },
    lat: {
        type: String,
        required: true
    }
})

module.exports = Location = mongoose.model('location', LocationSchema)