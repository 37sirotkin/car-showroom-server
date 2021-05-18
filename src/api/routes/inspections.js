const express = require('express');
const inspections = require('../services/inspections');

const router = new express.Router();


/**
 * Retrieve inspections
 */
router.get('/', async (req, res, next) => {
  const options = {
  };

  try {
    const result = await inspections.findInspections();
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
