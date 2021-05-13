const mongooes = require('mongoose')

var collectorSchema = mongooes.Schema({
    resourseType: {
        type: String
    },
    collectorId: {
        type: String
    },
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    dateOfBirth: {
        type: Date
    },
    gender: {
        type: String
    },
    phoneNumber: {
        type: Number
    },
    province: {
        type: String
    },
    district: {
        type: String
    },
    wards: {
        type: String
    },
    specificAddress: {
        type: String
    },
    collectorName: {
        type: String
    },
    password: {
        type: String
    },
    avatar: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    },
    type: {
        type: Number
    },
})

mongooes.model('CollectionMember', collectorSchema);