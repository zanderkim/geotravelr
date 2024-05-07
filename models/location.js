const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
      },
    name: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        required: false
    },
    category: {
        type: String,
        label: "category",
    }
}, { timestamps: true })

const locationSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
      },
    name: {
        type: String,
        required: [true, 'enter destination']
    },
    date: {
        type: String,
        required: [true, 'dates visited']
    },
    notes: {
        type: String,
        required: [true, 'enter any notes you wish (you can edit this later)']
    },
    places: [placeSchema]
    
}, { timestamps: true })

module.exports = mongoose.model('Location', locationSchema);
