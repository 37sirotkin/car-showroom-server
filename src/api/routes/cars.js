const express = require('express');
const cars = require('../services/cars');

const router = new express.Router();
const {ensureAuthenticated} = require('../middlewares/auth');

/**
 * Retrieve cars
 */
router.get('/', async (req, res, next) => {
  const options = {
    markId: req.query['markId'],
    color: req.query['color']
  };

  try {
    const result = await cars.findCars(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
