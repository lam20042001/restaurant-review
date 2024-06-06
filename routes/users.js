const express = require('express');
const router = express.Router();
const users = require('../controllers/users');

router.route('/register')
    .get(users.renderRegister)
    .post(users.postRegister);

router.route('/login')
    .get(users.renderLogin)
    .post(users.postLogin, users.login)

router.get('/logout', users.logout)

module.exports = router;