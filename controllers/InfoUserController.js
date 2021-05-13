const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.LoadData = function(req, res) {
    User.findById(req.params._id, (err, user) => {
        if (err) {
            console.log(err);
            throw err
        }
        res.render('./admin/userInformation', { user: user });
    })
};

exports.deleteRecord = function(req, res) {
    User.findByIdAndDelete(req.params.id, (err, doc) => {
        if (err) throw err;
        res.send(doc)
    })
};