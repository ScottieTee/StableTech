const { Schema, model } = require('mongoose')
const scheduleSchema = require('./schedule')

const horseSchema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    ownerName: {
        type: String,
        required: true
    },
    ownerPhone: {
        type: String,
        required: true
    },
    feed: {
        type: String,
        require: true
    }, 
    vaccineDate: {
        type: Date,
        required: true
    },
    shoeDate: {
        type: Date,
        required: true
    },
    barnName: {
        type: String,
        required: true
    }
})

const Horses = model('Horse', horseSchema);

module.exports = Horses
