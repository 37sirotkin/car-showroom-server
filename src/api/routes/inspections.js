const express = require('express');
const inspections = require('../services/inspections');

const router = new express.Router();


/**
 * Retrieve inspections
 */
router.get('/', async (req, res, next) => {
  try {
    const result = await inspections.findInspections();
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  console.log(req.body);
  const options = {
    inspections: req.body
  };
  try {
    const result = await inspections.createInspections(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
