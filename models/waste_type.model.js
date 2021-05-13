const mongoose = require('mongoose')
const { StringDecoder } = require('string_decoder')

var wasteTypeSchema = mongoose.Schema({
    resourceType: {
        type: String
    },
    wasteTypeId: {
        type: String
    },
    wasteTypeName: {
        type: String
    },
    boxId: {
        type: String
    }
})

mongoose.model('WasteType', wasteTypeSchema);