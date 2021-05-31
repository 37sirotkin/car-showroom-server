const express = require('express');
const order = require('../services/orders');

const router = new express.Router();

router.get('/', async (req, res, next) => {
  try {
    const result = await order.findOrder();
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  const options = {
    order: req.body
  };
  console.log(options);
  try {
    const result = await order.createOrder(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    next(err);
  }
});


module.exports = router;
