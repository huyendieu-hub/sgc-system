const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.LoadUser = function(req, res) {
    User.find({})
        .then(Users => {
            res.render('./admin/listUser', { Users: Users })
        })
        .catch(err => {
            console.log('Error: ', err);
            throw err;
        })
};