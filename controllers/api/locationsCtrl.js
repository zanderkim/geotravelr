const Location = require('../../models/location');

module.exports = {
    index,
    showL: showLocation,
    createL: createLocation,
    updateL: updateLocation,
    deleteL: deleteLocation,
  };

// mylocations - shows all user locations
async function index(req, res) {
  const locations = await Location.find({});
  res.json(locations);
}

// shows details of a location (location id page)
async function showLocation(req, res) {
  const location = await Location.findById(req.params.id);
  res.json({location});
}

// creates Location, redirects to index
async function createLocation(req, res) {
  try {
    req.body.user = req.user
    const location = await Location.create(req.body)
    res.status(201).json(location);
  } catch (err) {
    res.status(500).json({error: err.message})
  }
}

// Updates location (edit)
async function updateLocation(req, res) {

}

// Deletes location, redirects to index
async function deleteLocation(req, res) {
  try {
    await Location.delete(req.body)
    res.json(location);
    res.render('/mylocations')
  } catch (err) {
    res.render('/mylocations', {
      errorMsg: err
    })
  }
}

