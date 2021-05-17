const express = require('express');
const users = require('../services/users');

const router = new express.Router();


/**
 * Retrieve users
 */
router.get('/', async (req, res, next) => {
    try {
    const result = await users.findUsers();
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
