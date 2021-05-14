require('./createCollectionMemberController');
const express = require('express');
const mongoose = require('mongoose');
const CollectionMember = mongoose.model('CollectionMember');

exports.LoadList = function(req, res) {
    CollectionMember.findById(req.params.id, (err, CollectionMember) => {
        if (err) {
            console.log(err);
            throw err
        }
        res.render('./admin/collectionMemberInfo', { CollectionMember: CollectionMember });
    })
}

// exports.InserList = function(req, res) {
//     CollectionMember.findByIdAndUpdate({ _id: req.params._id }, {
//             $set: {
//                 firstname: req.body.firstname,
//                 lastname: req.body.lastname,
//                 dateOfBirth: req.body.dateOfBirth,
//                 gender: req.body.gender,
//                 phoneNumber: req.body.phoneNumber,
//                 province: req.body.province,
//                 district: req.body.district,
//                 wards: req.body.wards,
//                 specificAddress: req.body.specificAddress,
//                 collectorName: req.body.collectorName,
//                 password: req.body.password,
//                 avatar: req.body.avatar
//             }
//         }, { useFindAndModify: false })
//         .then(doc => {
//             res.redirect('/list-collection-member')
//         })
// }

exports.deleteRecord = function(req, res) {
    // let collectorId = req.params._id;
    CollectionMember.findByIdAndDelete(req.params.id, (err, doc) => {
        if (err) throw err;
        res.send(doc)
    })
};