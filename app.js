require('./models/db');
var createError = require('http-errors')
const express = require('express')
const path = require('path')
const ejs = require('ejs')
const morgan = require('morgan');
const { body, validationResult } = require('express-validator');

const app = new express()

//ad
const indexRoute = require('./routes/indexRoute');
const createCollectionMemberRoute = require('./routes/createCollectionMemberRoute');
const listCollectionMemberRoute = require('./routes/listCollectionMemberRoute');
const collectionMemberInfoRoute = require('./routes/collectionMemberInfoRoute');
const listUserRoute = require('./routes/listUserRoute');
const infoUserRoute = require('./routes/infoUserRoute');

const pagesRoute = require('./routes/pagesRoute');

app.use(express.static('public'))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views/'));
app.use('/public', express.static(__dirname + '/public/'));

app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.use(morgan('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ad
app.use('/', indexRoute);
app.use('/', createCollectionMemberRoute);
app.use('/', listCollectionMemberRoute);
app.use('/member-information/', collectionMemberInfoRoute);
app.use('/', listUserRoute);
app.use('/user-information', infoUserRoute);

app.use('/', pagesRoute);


// app.use(function(req, res, next) {
//     if (!req.user) return next(createError(401, 'Please login to view this page.'))
//     next()
// });

app.listen(5000, () => {
    console.log('App listening on port 5000');
});


module.exports = app;