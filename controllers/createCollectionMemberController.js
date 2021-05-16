const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const multer = require('multer');
const CollectionMember = mongoose.model('CollectionMember');

const storageEngine = multer.diskStorage({
    destination: './public/upload/collectionMember',
    filename: function(req, file, fn) {
        fn(null, new Date().getTime().toString() + '-' + file.fieldname + path.extname(file.originalname));
    }
});
const uploadImage = multer({
    storage: storageEngine,
    limits: {
        fileSize: 20000000
    },
    fileFilter: function(req, file, callback) {
        validateFile(file, callback);
    }
}).single('avatar');
var validateFile = function(file, cb) {
    allowedFileTypes = /jpeg|jpg|png|gif/;
    const extension = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = allowedFileTypes.test(file.mimetype);
    if (extension && mimeType) {
        return cb(null, true);
    } else {
        cb("Invalid file type. Only JPEG, PNG and GIF file are allowed.")
    }
};

exports.NewCollectionMember = function(req, res) {
    console.log(req.body);
    var collectionMember = new CollectionMember();
    uploadImage(req, res, (error) => {
        if (error) {
            console.log("Error 1");
        } else {
            collectionMember.resourceType = "Create Collection Member";
            collectionMember._id = req.body._id;
            collectionMember.firstname = req.body.firstname;
            collectionMember.lastname = req.body.lastname;
            collectionMember.dateOfBirth = req.body.dateOfBirth;
            collectionMember.gender = req.body.gender;
            collectionMember.phoneNumber = req.body.phoneNumber;
            collectionMember.province = req.body.province;
            collectionMember.district = req.body.district;
            collectionMember.wards = req.body.wards;
            collectionMember.specificAddress = req.body.specificAddress;
            collectionMember.collectorName = req.body.collectorName;
            collectionMember.password = req.body.password;


            if (req.file == undefined) {
                collectionMember.avatar = null;
            } else {
                var fullPath = "collectionMember/" + req.file.filename;
                collectionMember.avatar = fullPath;
            };
        };
        console.log(collectionMember);
        collectionMember.save((err, doc) => {
            if (!err) {
                res.redirect('/list-collection-member');
            } else {
                if (err.name == 'ValidationError') {
                    handleValidationError(err, req.body);
                    res.render("admin/createCollectionMember", {
                        viewTitle: 'Create Collection Member',
                        collectionMember: req.body,
                        layout: false,
                    });
                } else {
                    console.log('Error during record insertion : ' + err);
                }
            }
        })
    });


    function handleValidationError(err, body) {
        for (field in err.errors) {
            switch (err.errors[field].path) {
                case 'firstname':
                    body['firstnameError'] = err.errors[field].message;
                    break;
                case 'lastname':
                    body['lastnameError'] = err.errors[field].message;
                    break;
                case 'phoneNumber':
                    body['phoneNumberError'] = err.errors[field].message;
                    break;
                default:
                    break;
            };
        };
    };
}