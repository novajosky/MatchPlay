const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
// require the authorization middleware function
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const User = require('../../models/user');

// POST /api/users
router.post('/', usersCtrl.create);
// POST /api/users/login
router.post('/login', usersCtrl.login);
// GET /api/users/check-token
router.get('/check-token', usersCtrl.checkToken);
// Insert ensureLoggedIn on all routes that need protecting
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);
// GET user data for user cards in GolfersPage
router.route('/user').get((req, res) => {
    User.find()
        .then(foundUsers => res.json(foundUsers))
})

module.exports = router;