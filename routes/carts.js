require("../models/connexion");
const express = require("express");
const router = express.Router();
const Cart = require("../models/carts");

router.post("/carts", (req, res) => {
  Cart.find({
    departure: req.body.departure,
    arrival: req.body.arrival,
    // date: new Date(req.body.date),
  }).then((data) => {
    res.json({ allTrips: data });
  });
});

router.get("/carts", (req, res) => {
  Cart.find().then((data) => {
    res.json({ allTrips: data });
  });
});

module.exports = router;
