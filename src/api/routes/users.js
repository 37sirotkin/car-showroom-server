const express = require('express');
const users = require('../services/users');

const router = new express.Router();
const passport = require("passport");


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

router.post('/', async (req, res, next) => {
  const options = {
    user: req.body
  };
  console.log(req.body)

  try {
    const result = await users.createUser(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
