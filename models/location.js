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
    dropdown: {
        type: String,
        label: "Category",
        autoform: {
            options: ['Outdoors', 'Restaurant', 'Nightlife', 'Museum','Good for Families','Rainy Day']
        }
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
    notes: {
        type: String,
        required: [true, 'enter any notes you wish (you can edit this later)']
    },
    places: [placeSchema]
    
}, { timestamps: true })

module.exports = mongoose.model('Location', locationSchema);
