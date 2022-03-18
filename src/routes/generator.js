const router = require('express').Router();
const { Color, Ornament, Picture } = require('../../db/models');

let colors = [];
router.get('/', async (req, res) => {
  colors = await Color.findAll();
  ornaments = await Ornament.findAll();
  pictures = await Picture.findAll();
  res.render('generator', { colors, ornaments, pictures });
});
/* router.post('/getcolors', async (req, res) => {
  const { id } = req.body;
  const color = await Color.findOne({ where: { id } });
  res.send({ code: color.code });
}); */

module.exports = router;
