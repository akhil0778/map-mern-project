const express = require('express');
const { destinations, mapView } = require('../controllers/dataController');
const authenticate = require('../middleware/auth');

const router = express.Router();

router.get('/destinations', authenticate, destinations);
router.get('/map/:id', authenticate, mapView);

module.exports = router;
