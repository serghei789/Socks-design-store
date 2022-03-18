const router = require('express').Router();
const { Color, Ornament, Picture } = require('../../db/models');

router.get('/', async (req, res) => {
  colors = await Color.findAll();
  ornaments = await Ornament.findAll();
  pictures = await Picture.findAll();

  res.render('generator', { colors, ornaments, pictures });
});

router.post('/', async (req, res) => {
  const { id } = req.body;
  const color = await Color.findOne({ where: { id } });
  res.json({ code: color.code });
});

router.post('/picture', async (req, res) => {
  const { id } = req.body;
  const pictureSrc = await Picture.findOne({ where: { id } });
  res.json({ src: pictureSrc.src });
});
module.exports = router;
