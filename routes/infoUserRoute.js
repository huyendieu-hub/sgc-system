const express = require('express');
const router = express.Router();
const information_user = require('../controllers/InfoUserController');

router.get('/:id', (req, res) => {
    information_user.LoadData(req, res)
});

router.delete('/:id', (req, res) => {
    information_user.deleteRecord(req, res);
});

module.exports = router;