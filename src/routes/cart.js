const express = require('express');

const router = express.Router();

const { Color, Ornament, Picture, Favourite, Sockstype, Order } = require('../../db/models');
// /cart
router.get('/', async (req, res) => {
  
  res.render('cart');
});

router.put('/box', async (req, res) => {
  try {
    const { count } = req.body;
    await Order.update({ count: count + 1 });
  } catch (err) {
    console.log(err);
    res.status(500);
  }
});

router.get('/box', async (req, res) => {
  const designsFavUser = await Favourite.findAll({ where: { userId: req.session.userId }, raw: true });
  const designArr = await Promise.all(designsFavUser.map(async (favourite) => {
    const resDes = await Sockstype.findOne({ where: { id: favourite.socksId }, raw: true });
    return resDes;
  }));

  const result = await Promise.all(designArr.map(async (designObj) => {
    const { dataValues: color } = await Color.findOne({ where: { id: designObj.colorId } });
    const { dataValues: ornament } = await Ornament.findOne({ where: { id: designObj.ornamentId } });
    const { dataValues: picture } = await Picture.findOne({ where: { id: designObj.pictureId } });
    return {
      color: color.name, ornament: ornament.src, picture: picture.src, socksId: designObj.id,
    };
  }));

  // const getFavorite = await Favourite.findAll({ where: { userId: req.session.userId } });
  const cart = await Order.findAll({ where: { userId: req.session.userId } });

  res.render('cart', {
    getFavorite, result, cart,
  });
});

module.exports = router;
