// const router = require('express').Router();
const express = require('express');
const router = express.Router();

// Fruits Model
const fruits = require('../models/Fruit');

// CURRENT PATH = '/fruits'

// INDEX Fruits
router.get('/', (req, res) => {
  // console.log(fruits);
  // res.send(fruits);
  res.render('fruits/indexFruit', {
    fruits: fruits,
  });
});


// SHOW Fruits
router.get('/:fruitIndex', (req, res) => {
  const fruitIndex = req.params.fruitIndex;
  const fruit = fruits[fruitIndex];

  // if (fruits[fruitIndex]) {
  //   res.send(fruits[fruitIndex]);
  // } else {
  //   res.send('Sorry, that fruit does not exist');
  // }


  res.render('fruits/showFruit', {
    fruit: fruit,
  });
});

module.exports = router;
