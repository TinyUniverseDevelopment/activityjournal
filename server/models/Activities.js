const mongoose = require('mongoose')

const activitiesSchema = new mongoose.Schema({
    activity: {
        type: String,
        required: true

    },
    activityType: {
        type: String,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

activitiesSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__V
    }
})

module.exports = mongoose.model('Activity', activitiesSchema)