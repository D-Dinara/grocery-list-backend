const mongoose = require('mongoose');

const grocerySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    unitOfMeasurement: {
        type: String,
        required: false,
    }
})

module.exports = mongoose.model('grocery', grocerySchema)
