const express = require('express');
const router = express.Router();
const list_user = require('../controllers/listUserController');

router.get('/list-user', (req, res) => {
    list_user.LoadUser(req, res)
})

module.exports = router;