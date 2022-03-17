const express = require('express');
const index = express.Router()

index.get('/', (req, res) => {
  res.render('home')
})

module.exports = index;
