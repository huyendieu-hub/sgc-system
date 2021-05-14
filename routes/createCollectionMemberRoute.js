const { error } = require('console');
const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
var create_collector = require('../controllers/createCollectionMemberController');

router.get('/create-collection-member', (req, res) => {
    res.render('./admin/createCollectionMember', { title: 'Create Collector', layout: false });
});

router.post('/create-collection-member', (req, res) => {
    [
        check('password', 'You password mút be at least 6 character').isLength({ min: 6 })
    ],
    (function(req, res, next) {
        var messages = req.flash('error');
        const result = validationResult(req);
        var errors = result.errors;
        if (!result.isEmpty()) {
            var messages = [];
            errors.forEach(function(error) {
                messages.push(error.msg);
            });
            res.render('/create-collection-member', {
                messages: messages,
                hasErrors: messages.length > 0,
            });
        } else {
            next();
        }
    });
    create_collector.NewCollectionMember(req, res);
});


module.exports = router;