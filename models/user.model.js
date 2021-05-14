const mongooes = require('mongoose');
const bcrypt = require('bcrypt')

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
        type: String,
        required: true,
        unique: true
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
});

userSchema.pre('save', function(next) {
    const user = this;
    bcrypt.hash(user.password, 10, (error, hash) => {
        user.password = hash;
        next();
    });
});

mongooes.model('User', userSchema);