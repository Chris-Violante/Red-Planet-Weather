const express = require('express')
const router = require('express').Router()
const marsApiCtrl = require('../controllers/insight-mars-api')

router.get('/', marsApiCtrl.getMarsData)


module.exports = router