const express = require('express');
const registration = express.Router();

const bcrypt = require('bcrypt');

const { User } = require('../../db/models');


registration.post('/', async (req, res) => {
  const { name, email, password: pass } = req.body;
  const currUser = await User.findOne({ where: { email }, raw: true });
  if (currUser) {
    res.status(400);
    res.json({ message: 'a user with such an email is already registered in the database' });
  } else {
    try {
      // console.log('try');
      const saltRounds = 10;
      const password = await bcrypt.hash(pass, saltRounds);
      const newUser = await User.create({ name, email, password })
      req.session.userId = await newUser.id;
      req.session.userName = await newUser.name;
      req.session.userEmale = await newUser.email;
      res.sendStatus(200)
    } catch (e) {
      res.sendStatus(400)
    }
  }
})

module.exports = registration;
