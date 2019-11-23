const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate');
const activitiesSchema = new mongoose.Schema({
    activity: {
        type: String,
        required: false

    },
    activityType: {
        type: String,
        required: false
    },
    startTime: {
        type: String,
        required: false
    },
    endTime: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    },
    month: {
        type: Number
    },
    day: {
        type: Number
    },
    time: {
        type: Number
    },
    countOfTypes: {
        type: Object
    }
})

activitiesSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__V
    }
})

activitiesSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('Activity', activitiesSchema)