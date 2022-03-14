const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
// require the authorization middleware function
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const User = require('../../models/user');
const mongo = require('mongodb').MongoClient;
const assert = require('assert');
const { db } = require('../../models/user');

const url = 'mongodb://localhost:27017';

// POST /api/users
router.post('/', usersCtrl.create);
// POST /api/users/login
router.post('/login', usersCtrl.login);
// GET /api/users/check-token
router.get('/check-token', usersCtrl.checkToken);
// Insert ensureLoggedIn on all routes that need protecting
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);
// GET user data
router.get('/', usersCtrl.getAll);

// router.post('/insert', function(req, res, next) {
//     let item = {
//         name: req.body.name,
//         citystate: req.body.citystate,
//         handicap: req.body.handicap,
//         drinker: req.body.drinker,
//         gender: req.body.gender,
//         pfgender: req.body.pfgender,
//         playage: req.body.playage,
//         drinker: req.body.drinker,
//         meticulous: req.body.meticulous,
//         etiquette: req.body.etiquette,
//         skillset: req.body.skillset,
//     };

//     mongo.connect(url, function() {
//         assert.equal(null, err);
//         db.collection('user-data').insertOne(item, function(err, result) {
//             assert.equal(null, err);
//             console.log('item inserted');
//             db.close();
//         })
//     });

//     res.redirect('/');
// });
router.post('/update', function(req, res, next) {

});
router.post('/delete', function(req, res, next) {

});

module.exports = router;