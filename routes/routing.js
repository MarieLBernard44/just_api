/**
 * Express Router configuration
 */

const express = require('express');
const router = express.Router();
const path = require('../app');
const ProfileController = require('../controller/profileController');
const profileController = new ProfileController();

/* API routes */
router.get('/api/v1', function (req, res) {
    profileController.getProfilesList(res);
});

router.get('/api/v1/:activity', function (req, res) {
    profileController.getProfilesByActivity(req, res);
});

/* test des vues*/
router.get('/', function (req, res) {
  res.render('index',  { title: 'A3dev', message: 'Liste des profils'});
});

router.get('/download/:activity/', function(req, res) {
    profileController.downloadProfilesByActivity(req, res);
});

module.exports = router;
