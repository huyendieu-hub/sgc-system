const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
    res.render('./admin/login');
});

router.get('/register', (req, res) => {
    res.render('./admin/register');
});

router.get('/forgot-password', (req, res) => {
    res.render('./admin/forgot-password');
});

router.get('/404', (req, res) => {
    res.render('./admin/404');
});

router.get('/blank', (req, res) => {
    res.render('./admin/blank');
});

module.exports = router;