const mongoose = require('mongoose')

var collectionOrderSchema = mongoose.Schema({
    resourceType: {
        type: String
    },
    collectionOrderId: {
        type: String
    },
    userId: {
        type: String
    },
    wasteId: {
        type: String
    },
    amountOfWaste: {
        type: Number
    },
    calendar: {
        type: String
    },
    points: {
        type: Number
    },
    orderState: {
        type: String
    }
})

mongoose.model('CollectionOrder', collectionOrderSchema);