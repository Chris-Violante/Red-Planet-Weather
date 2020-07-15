const router = require('express').Router();
const usersCtrl = require('../controllers/users');
const express = require('express');

router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);

module.exports = router;