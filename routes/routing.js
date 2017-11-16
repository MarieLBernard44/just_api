/**
 * Express Router configuration
 */

const express = require('express');
const router = express.Router();
const ProfileController = require('../controller/profileController');
const SecurityController = require('../controller/securityController');
const profileController = new ProfileController();
const securityController = new SecurityController();

/* Login page */

router.get('/', function (req, res) {
    res.render('login', {title: 'A3dev', message: 'Authentification requise'});
});

/* API routes */

router.post('/api/v1/authenticate', function (req, res) {
    securityController.authenticateApi(req, res);
});

router.post('/authenticate', function (req, res) {
    securityController.authenticateView(req, res);
});

// All the routes bellow this one are secured, order is important
router.use(function(req, res, next) {
    securityController.validate(req, res, next);
});

router.get('/api/v1', function (req, res) {
    profileController.getProfilesList(res);
});

router.get('/api/v1/:activity', function (req, res) {
    profileController.getProfilesByActivity(req, res);
});

/* Download route */
router.get('/download/:activity/', function (req, res) {
    profileController.downloadProfilesByActivity(req, res);
});

module.exports = router;
