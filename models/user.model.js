const mongooes = require('mongoose')

var userSchema = mongooes.Schema({
    resourseType: {
        type: String
    },
    userId: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
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
    address: {
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
        }
    },
    userName: {
        type: String
    },
    points: {
        type: Number
    },
    refCode: {
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

mongooes.model('User', userSchema);