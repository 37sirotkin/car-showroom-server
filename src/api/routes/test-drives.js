const express = require('express');
const testDrives = require('../services/test-drives');

const router = new express.Router();

router.get('/', async (req, res, next) => {
  try {
    const result = await testDrives.findTestDrives();
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
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
