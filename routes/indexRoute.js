const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/admin', (req, res) => {
    res.render('./admin/index');
});

module.exports = router;