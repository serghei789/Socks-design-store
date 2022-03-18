const express = require('express');
const {
  Favourite, Sockstype, Color, Ornament, Picture,
} = require('../../db/models');

const router = express.Router();

// /favourites
router.get('/', (req, res) => {
  res.render('favourites');
});

router.get('/favourites', async (req, res) => {
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
      color: color.color, ornament: ornament.url, picture: picture.url, socksId: designObj.id,
    };
  }));
  const getFavourite = await Favourite.findAll({ where: { userId: req.session.userId } });
  res.render('favourites', { getFavourite, result });
});

router.delete('/delete/:id', async (req, res) => {
  try {
    await Favourite.destroy({ where: { id: req.params.id } });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.get('/sockstype/:id', async (req, res) => {
  // отрисовать методом из конструктора + добавить кнопку поделиться
  const { dataValues } = await Favourite.findOne({ where: { id: req.params.id } });
  // в клиентском js заглушить кнопку и сделать всплывающий инпут с ссылкой
  // console.log(dataValues);
  const { dataValues: sockstype } = await Sockstype.findOne({ where: { id: dataValues.socksId } });
  const { dataValues: color } = await Color.findOne({ where: { id: sockstype.colorIid } });
  const { dataValues: ornament } = await Ornament.findOne({ where: { id: sockstype.ornamentId } });
  const { dataValues: picture } = await Picture.findOne({ where: { id: sockstype.pictureId } });
  // console.log(color.color);
  res.render('sockstype', {
    favourite: dataValues, color: color.color, ornament: ornament.url, picture: picture.url,
  });
});

module.exports = router;
