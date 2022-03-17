const express = require('express');
const authorization = express.Router();

const bcrypt = require('bcrypt');

const { User } = require('../../db/models');

authorization.post('/', async (req, res) => {
  console.log('<====authorization====>');
  const { email, password } = req.body;
    const currUser = await User.findOne({ where: { email }, raw: true });
    // console.log(currUser);
    if (currUser && (await bcrypt.compare(password, currUser.password))) {
      console.log('<== authorization USER ==>');
      // console.log(currUser);
      req.session.userId = await currUser.id;
      req.session.userName = await currUser.name;
      req.session.userEmale = await currUser.email;
      res.status(200)
    } else {
      res.status(400);
      res.json({ message: 'вы ввели неверный пароль или почту. А может и то и другое сразу =)' });
    }
})

module.exports = authorization;
