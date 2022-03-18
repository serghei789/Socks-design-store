const express = require('express');

const router = express.Router();

const { Color, Ornament, Picture, Favourite, Sockstype, Order} = require('../../db/models');
// /cart
router.get('/', (req, res) => {
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
  // добавить код для отправки в хбс
  const designsFavUser = await Favourite.findAll({ where: { userId: req.session.userId }, raw: true });
  // console.log(designsFavUser);
  const designArr = await Promise.all(designsFavUser.map(async (favourite) => {
    const resDes = await Sockstype.findOne({ where: { id: favourite.socksId }, raw: true });
    return resDes;
  }));
  // console.log(designArr);
  const result = await Promise.all(designArr.map(async (designObj) => {
    // console.log(designObj);
    const { dataValues: color } = await Color.findOne({ where: { id: designObj.colorId } });
    // console.log(color);
    const { dataValues: ornament } = await Ornament.findOne({ where: { id: designObj.ornamentId } });
    const { dataValues: picture } = await Picture.findOne({ where: { id: designObj.pictureId } });
    return {
      color: color.name, ornament: ornament.src, picture: picture.src, socksId: designObj.id,
    };
  }));
  // console.log(result);
  const getFavorite = await Favourite.findAll({ where: { userId: req.session.userId } });
  const cart = await Order.findAll({ where: { userId: req.session.userId } });
  // console.log(cart)
  
  // console.log(sum);
  res.render('cart', {
    getFavorite, result, cart, 
  });
});

module.exports = router
