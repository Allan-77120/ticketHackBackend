require('../models/connexion');
const express =require("express");
const router = express.Router();
const Trip = require('../models/trips');


router.post('/trips', (req, res) => {
 const NewTrip = new Trip({ 
departure: req.body.departure, 
arrival: req.body.arrival, 
date: req.body.date,
price: req.body.price, });
 NewTrip.save().then(() =>{
  Trip.find().then(data => {
  res.json({ result: true, allTrips: data });
  })
  });
});


router.get('/trips', (req, res) => {
  Trip.find().then(data => {
  res.json({ allTrips: data });
});
});


router.delete("/:id", (req, res) => {
  Message.findByIdAndDelete(req.params.id).then(() => {
    res.json({ result: true });
  });
});













module.exports = router;