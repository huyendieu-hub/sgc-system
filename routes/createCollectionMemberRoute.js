const express = require('express');
const router = express.Router();
var create_collector = require('../controllers/createCollectionMemberController');

router.get('/create-collection-member', (req, res) => {
    res.render('./admin/createCollectionMember', { title: 'Create Collector', layout: false });
});

router.post('/create-collection-member', (req, res) => {
    create_collector.NewCollectionMember(req, res);
});


module.exports = router;