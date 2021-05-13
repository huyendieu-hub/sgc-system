const mongooes = require('mongoose')

var accountSchema = mongooes.Schema({
    resourceType: {
        type: String
    },
    identifier: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    phoneNumber: {
        trype: Number
    },
    email: {
        type: String
    }
})

mongooes.model('Account', accountSchema);