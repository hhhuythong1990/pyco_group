const express = require('express');

const router = express.Router();
const { check, validationResult } = require('express-validator');
const { calculateDemand } = require('./hotel.service');

router.post('/hotels', [
  check('arrivals').not().isEmpty().isArray(),
  check('departures').not().isEmpty().isArray(),
  check('k').not().isEmpty().isInt(),
], (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const { arrivals, departures, k } = req.body;
    const arrRotate = calculateDemand(arrivals, departures, k);
    return res.json(arrRotate);
  } catch (e) {
    return next(e);
  }
});

module.exports = router;
