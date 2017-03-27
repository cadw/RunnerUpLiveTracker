var express = require('express');
var router = express.Router();
var coordinates = [];

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/resource', function (req, res, next) {
  if (coordinates.push({
    lat: req.body.lat,
    lng: req.body.long})
  )
    res.json({message: "Coordinate added succesfully!"});
  else
    res.json({message: "Coordinate has not been added!"});
});

router.get('/resource', function (req, res, next) {
  res.json(coordinates);
});

module.exports = router;
