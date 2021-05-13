const express = require('express');
const router = express.Router();
const collection_member_info = require('../controllers/collectionMemberInfoController');

router.get('/:id', (req, res) => {
    collection_member_info.LoadList(req, res)
})

router.post('/:id', (req, res) => {
    collection_member_info.InserList(req, res)
})

router.delete('/:id', (req, res) => {
    collection_member_info.deleteRecord(req, res);
});

module.exports = router;