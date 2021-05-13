const mongoose = require('mongoose')

var pointsSchema = mongoose.Schema({
    resourceType: {
        type: String
    },
    pointsId: {
        type: String
    },
    active: {
        type: String
    },
    datetime: {
        type: Date
    },
    points: {
        type: Number
    }
})

mongoose.model('Points', pointsSchema);