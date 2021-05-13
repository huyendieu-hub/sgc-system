const express = require('express');
const mongoose = require('mongoose');
const ListCollectionMember = mongoose.model('CollectionMember')

exports.LoadMember = function(req, res) {
    ListCollectionMember.find({})
        .then(ListCollectionMembers => {
            res.render('./admin/listCollectionMember', { ListCollectionMembers: ListCollectionMembers })
        })
        .catch(err => {
            console.log('Error: ', err);
            throw err;
        })
};