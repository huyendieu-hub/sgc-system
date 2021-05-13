const express = require('express');
const router = express.Router();
const list_member = require('../controllers/listCollectionMemberController');

router.get('/list-collection-member', (req, res) => {
    list_member.LoadMember(req, res)
})


module.exports = router;