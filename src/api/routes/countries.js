const express = require('express');
const countries = require('../services/countries');

const router = new express.Router();


/**
 * Retrieve country
 */
router.get('/', async (req, res, next) => {
  const options = {
  };

  try {
    const result = await countries.findCountry();
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
