const mongoose = require('mongoose')

var wasteBoxSchema = mongoose.Schema({
    resourceType: {
        type: String
    },
    wasteBoxId: {
        type: String
    },
    wasteBoxName: {
        type: String
    },
    wasteTypeId: {
        type: String
    }
})

mongoose.model('WasteBox', wasteBoxSchema);