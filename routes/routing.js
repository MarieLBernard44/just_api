/**
 * Express Router configuration
 */

const express = require('express');
const router = express.Router();
const path = require('../app');

const profileController = require('../controller/profileController.js');

/* API routes */
router.get(path+'/', function (req, res) {
    profileController.getAll(res);
});

router.get(path+'/:activity', function (req, res) {
    profileController.getByActivity(req, res);
});

module.exports = router;