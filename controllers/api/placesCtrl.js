const Place = require('../../models/place');

module.exports = {
    pIndex: placeIndex,
    showP: showPlace,
    createP: createPlace,
    updateP: updatePlace,
    deleteP: deletePlace,
  };

  async function placeIndex(req, res) {
    const places = await Place.find({});
    res.json(places);
  }

  async function showPlace(req, res) {
    const place = await Place.findById(req.params.id);
    res.json({place});
  }

  async function createPlace(req, res) {
    try {
      req.body.user = req.user
      const place = await Place.create(req.body)
      res.status(201).json(place);
    } catch (err) {
      res.status(500).json({error: err.message})
    }
  }

  async function updatePlace(req, res) {
  }

  async function deletePlace(req, res) {
    try {
      await Place.delete(req.body)
      res.json(place);
    } catch (err) {
      res.render('/myplaces', {
        errorMsg: err
      })
    }
  }
