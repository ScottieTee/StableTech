const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
    
    ownerName: {
        type: String,
        required: true
    },
    ownerPhone: {
        type: String,
        required: true
    },
    
    visitDate: {
        type: Date,
        required: true
    },
    
   
})

module.exports = mongoose.model("schedule", scheduleSchema);