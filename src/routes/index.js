const express = require('express');

const index = express.Router();

index.get('/', (req, res) => {
  const name = req.session.userName || 'юзер';
  console.log(req.session.userName);
  res.render('home', { name });
});

module.exports = index;
