const express = require('express');
const router = express.Router();
const locationsCtrl = require('../../controllers/api/locationsCtrl');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// GET /allUserLocations
router.get('/', ensureLoggedIn, locationsCtrl.index);

// GET /add Location form, back to /mylocations
router.get('/addlocation', ensureLoggedIn, locationsCtrl.showL);

// post and create new Location
router.post('/', ensureLoggedIn, locationsCtrl.createL);

// delete location
router.delete('/:id', ensureLoggedIn, locationsCtrl.deleteL);

// GET is the show id page for specific Location
router.get('/:id', ensureLoggedIn, locationsCtrl.showL);

module.exports = router;
