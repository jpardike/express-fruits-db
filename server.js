const express = require('express');
const app = express();
const PORT = 4000;

// Fruits Collection
const fruits = ['apple', 'banana', 'pear'];

// Home Route
app.get('/', (req, res) => {
  res.send('<h1>Welcome to Express Fruits</h1>');
});

// INDEX Fruits
app.get('/fruits', (req, res) => {
  console.log(fruits);
  res.send(fruits);
});

// SHOW Fruits
app.get('/fruits/:fruitIndex', (req, res) => {
  const fruitIndex = req.params.fruitIndex;

  if (fruits[fruitIndex]) {
    res.send(fruits[fruitIndex]);
  } else {
    res.send('Sorry, that fruit does not exist');
  }

});


// Listener
app.listen(PORT, () => console.log(`Server started successfully on port ${PORT}`));
