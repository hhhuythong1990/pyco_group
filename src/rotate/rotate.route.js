const express = require('express');

const router = express.Router();
const { check, validationResult } = require('express-validator');
const { rotatePicute } = require('./rotate.service');

router.post('/rotates', [
  check('grid').not().isEmpty().isArray(),
  check('k').not().isEmpty().isInt(),
], (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const { grid, k } = req.body;
    const rotated90Degree = rotatePicute(grid, k);
    return res.json(rotated90Degree);
  } catch (e) {
    return next(e);
  }
});

module.exports = router;
