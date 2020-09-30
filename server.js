const express = require('express');
const app = express();
const PORT = 4000;

// Set View Engine
app.set('view engine', 'ejs');

// Fruits Controller
const fruitsCtrl = require('./controllers/fruitsController');
const fruits = require('./models/Fruit');

// Home Route
app.get('/', (req, res) => {
  // res.sendFile();
  // res.send('<h1>Welcome to Express Fruits</h1>');
  res.render('index');
});

// Fruits Routes
app.use('/fruits', fruitsCtrl);

// Listener
app.listen(PORT, () => console.log(`Server started successfully on port ${PORT}`));
