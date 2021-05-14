const mongooes = require('mongoose');
const bcrypt = require('bcrypt')

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
        type: String,
        required: true,
        unique: true,
        index: true
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
});

collectorSchema.pre('save', function(next) {
    const collector = this;
    bcrypt.hash(collector.password, 10, (error, hash) => {
        collector.password = hash;
        next();
    });
});


mongooes.model('CollectionMember', collectorSchema);