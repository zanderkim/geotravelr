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
        label: "Category",
        autoform: {
            options: ['Outdoors', 'Restaurant', 'Nightlife', 'Museum','Good for Families','Rainy Day']
        }
    }
}, { timestamps: true })

module.exports = mongoose.model('Place', placeSchema);
