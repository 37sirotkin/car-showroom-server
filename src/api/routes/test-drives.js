const express = require('express');
const testDrives = require('../services/test-drives');

const router = new express.Router();


/**
 * Retrieve test drives
 */
router.get('/', async (req, res, next) => {
  const options = {};

  try {
    const result = await testDrives.findTestDrives();
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    next(err);
  }
});

/**
 * Create a test drive
 */
router.post('/', async (req, res, next) => {
  console.log(req.body);
  const options = {
    testDrive: req.body
  };

  try {
    const result = await testDrives.createTestDrive(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
