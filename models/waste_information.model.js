const mongoose = require('mongoose')

var wasteInformationSchema = mongoose.Schema({
    resourceType: {
        type: String
    },
    wasteInformationId: {
        type: String
    },
    wasteName: {
        type: String
    },
    wasteType: {
        type: String
    },
    wasteBox: {
        type: String
    }
})

mongoose.model('WasteInformation', wasteInformationSchema);