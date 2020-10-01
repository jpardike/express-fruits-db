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
  // Update readyToEat to a boolean value
  // if (req.body.readyToEat === 'on') {
  //   req.body.readyToEat = true;
  // } else {
  //   req.body.readyToEat = false;
  // }
    
  const newFruit = {
    name: req.body.name,
    color: req.body.color,
    readyToEat: req.body.readyToEat === 'on'
  };

  fruits.push(newFruit);
  res.redirect(`/fruits/${fruits.length - 1}`);
});

// SHOW Fruits
router.get('/:fruitIndex', (req, res) => {
  const fruitIndex = req.params.fruitIndex;
  const fruit = fruits[fruitIndex];

  if (fruits[fruitIndex]) {
    res.render('fruits/showFruit', {
      fruit: fruit,
      fruitIndex: fruitIndex
    });
  } else {
    res.render('fruits/showFruit', {
      fruit: {name: 'Does not exist'},
    });
  }
});

// REMOVE Fruits
router.delete('/:fruitIndex', (req, res) => {
  fruits.splice(req.params.fruitIndex, 1);

  res.redirect('/fruits');
});

router.get('/:fruitIndex/edit', (req, res) => {
  const fruitIndex = req.params.fruitIndex;

  res.render('fruits/editFruit', {
    fruit: fruits[fruitIndex],
    fruitIndex: fruitIndex
  });
});

// UPDATE Fruits
router.put('/:fruitIndex', (req, res) => {
  // GET DATA FROM REQUEST BODY
  const fruitIndex = req.params.fruitIndex;
  const newFruit = {
    name: req.body.name,
    color: req.body.color,
    readyToEat: req.body.readyToEat === 'on'
  };

  // UPDATE FRUIT IN DATABASE
  fruits.splice(fruitIndex, 1, newFruit);

  // REDIRECT TO SHOW FRUIT FOR PARTICULAR FRUIT
  res.redirect(`/fruits/${fruitIndex}`);
});

module.exports = router;
