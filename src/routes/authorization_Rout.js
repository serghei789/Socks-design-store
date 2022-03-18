const express = require('express');
// const bcrypt = require('bcrypt');
const sha256 = require('sha256');

const authorization = express.Router();

const { User } = require('../../db/models');
// /autorization
authorization.post('/', async (req, res) => {
  console.log('<====authorization====>');
  const { email, password } = req.body;
    const currUser = await User.findOne({ where: { email }, raw: true });
    if (currUser && (currUser.password === await sha256(password))) {
      console.log('<== authorization USER ==>');
      req.session.userId = await currUser.id;
      req.session.userName = await currUser.name;
      req.session.userEmale = await currUser.email;
      return res.json({
        authenticated: true,
      });
    } else {
      res.status(400);
      res.json({ message: 'вы ввели неверный пароль или почту. А может и то и другое сразу =)' });
    }
})
authorization.get('/signout', (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.sendStatus(500);

    res.clearCookie('ourCookie');
    res.redirect('/');
})});
module.exports = authorization;
