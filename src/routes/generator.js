const router = require('express').Router();
const { Color } = require('../../db/models');

router.get('/', async (req, res) => {
  const colors = await Color.findAll();
  res.render('generator', { colors });
});

module.exports = router;
