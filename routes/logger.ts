const express = require('express');

const router = express.Router();

let loggerController = require('../controllers/loggerController.ts');

// Allows coop logger to post data
router.get('/', loggerController.loggerPostNewData);

module.exports = router;

// api_key, humidity_1, tempF_1, humidity_2, tempF_2, door_locked, battery