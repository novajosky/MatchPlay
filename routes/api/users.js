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


module.exports = router;