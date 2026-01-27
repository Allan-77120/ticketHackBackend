require("../models/connexion");
const express = require("express");
const router = express.Router();
const Trip = require("../models/trips");

router.post("/trips", (req, res) => {
  const NewTrip = new Trip({
    departure: req.body.departure,
    arrival: req.body.arrival,
    date: req.body.date,
    price: req.body.price,
  });
  NewTrip.save().then(() => {
    Trip.find().then((data) => {
      res.json({ result: true, allTrips: data });
    });
  });
});

router.get("/trips", (req, res) => {
  Trip.find({
    departure: req.body.departure,
    arrival: req.body.arrival,
    date: req.body.date,
  }).then((data) => {
    res.json({ allTrips: data });
  });
});

module.exports = router;
