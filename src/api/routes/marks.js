const express = require('express');
const marks = require('../services/marks');

const router = new express.Router();


/**
 * Retrieve marks
 */
router.get('/', async (req, res, next) => {

  try {
    const result = await marks.findMarks;
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
