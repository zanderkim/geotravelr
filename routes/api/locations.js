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

// edit a location form
router.get('/:id/edit', ensureLoggedIn, locationsCtrl.updateL)

// Edit and update a location
router.put('/:id/edit', ensureLoggedIn, locationsCtrl.updateL);

module.exports = router;
