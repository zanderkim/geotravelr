const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const placesCtrl = require('../../controllers/api/placesCtrl');


module.exports = router;
