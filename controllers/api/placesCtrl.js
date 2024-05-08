const Place = require('../../models/place');

module.exports = {
    pIndex: placeIndex,
    showP: showPlace,
    createP: createPlace,
    updateP: updatePlace,
    deleteP: deletePlace,
  };

// index/mylocations - shows all user locations
async function placeIndex(req, res) {
  const places = await Place.find({});
  res.json(places);
}

// shows details of a location (location id page)
async function showPlace(req, res) {
  const place = await Place.findById(req.params.id);
  res.json({place});
}

// creates Location, redirects to index
async function createPlace(req, res) {
  try {
    req.body.user = req.user
    const place = await Place.create(req.body)
    res.status(201).json(place);
  } catch (err) {
    res.status(500).json({error: err.message})
  }
}

// Updates location (edit)
async function updatePlace(req, res) {
  try {
    const places = await Place.findByIdAndUpdate(req.params.id, req.body)
    res.json(places);
  } catch (err) {
    res.json(err)
  }
}

// Deletes location, redirects to index
async function deletePlace(req, res) {
  try {
    const places = await Place.findByIdAndDelete(req.params.id)
    res.json(places);
  } catch (err) {
   res.json(err)
  }
}