// const router = require('express').Router();
const express = require('express');
const router = express.Router();

// Fruits Model
const fruits = require('../models/Fruit');

// CURRENT PATH = '/fruits'

// INDEX Fruits
router.get('/', (req, res) => {
  res.render('fruits/indexFruit', {
    fruits: fruits
  });
});

// NEW Fruits
router.get('/new', (req, res) => {
  res.render('fruits/newFruit');
});

// CREATE Fruits
router.post('/', (req, res) => {
  console.log(req.body);
  res.send('<h1>Data received</h1>');
});

// SHOW Fruits
router.get('/:fruitIndex', (req, res) => {
  const fruitIndex = req.params.fruitIndex;
  const fruit = fruits[fruitIndex];

  if (fruits[fruitIndex]) {
    res.render('fruits/showFruit', {
      fruit: fruit,
    });
  } else {
    res.render('fruits/showFruit', {
      fruit: {name: 'Does not exist'},
    });
  }
});


module.exports = router;
