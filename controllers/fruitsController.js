// const router = require('express').Router();
const express = require("express");
const router = express.Router();

// Fruits Model
const db = require("../models");

// CURRENT PATH = '/fruits'

// INDEX Fruits
router.get("/", (req, res) => { // Route handler (Express)

  // Query the DB for all fruits (Mongoose)
  db.Fruit.find({}, (err, allFruits) => {
    console.log(allFruits);

    // Always Handle Error First
    if (err) {
      console.log(err);
    }

    res.render("fruits/indexFruit", { // Response (Express)
      fruits: allFruits,
    });
  });
});

// NEW Fruits
router.get("/new", (req, res) => {
  res.render("fruits/newFruit");
});

// CREATE Fruits
router.post("/", (req, res) => {
  // Update readyToEat to a boolean value
  // if (req.body.readyToEat === 'on') {
  //   req.body.readyToEat = true;
  // } else {
  //   req.body.readyToEat = false;
  // }

  // const newFruit = {
  //   name: req.body.name,
  //   color: req.body.color,
  //   readyToEat: req.body.readyToEat === "on",
  // };

  req.body.readyToEat = req.body.readyToEat === 'on';

  db.Fruit.create(req.body, (err, newFruit) => {
    if (err) return console.log(err);

    res.redirect(`/fruits/${newFruit._id}`);

  });
});

// SHOW Fruits
router.get("/:fruitId", (req, res) => {
  // Query DB for fruit by ID
  db.Fruit.findById(req.params.fruitId, (err, foundFruit) => {
    // Always Handle the Error FIRST!!!
    if (err) return console.log(err);
    // Express Response
    res.render('fruits/showFruit', {
      fruit: foundFruit,
    });
  });
});

// REMOVE Fruits
router.delete("/:fruitId", (req, res) => {
  // Query the Fruit Model to delete fruit by ID
  db.Fruit.findByIdAndDelete(req.params.fruitId, (err, deletedFruit) => {
    if (err) return console.log(err);
    res.redirect("/fruits");
  });
});

// EDIT Fruit
router.get("/:fruitId/edit", (req, res) => {
  
  // Query the Fruit collection for fruit by ID
  db.Fruit.findById(req.params.fruitId, (err, foundFruit) => {
    if (err) return console.log(err);

    res.render("fruits/editFruit", {
      fruit: foundFruit,
    });
  });

});

// UPDATE Fruits
router.put("/:fruitId", (req, res) => {
  // Update readyToEat to Boolean
  req.body.readyToEat = req.body.readyToEat === 'on';

  // Query Fruit collection by ID and Update
  db.Fruit.findByIdAndUpdate(
    req.params.fruitId, // ID to find record by
    req.body, // new data for record
    {new: true}, // return updated record (as opposed to original record)
    (err, updatedFruit) => { // Callback
      if (err) return console.log(err);
      
      // REDIRECT TO SHOW FRUIT FOR PARTICULAR FRUIT
      res.redirect(`/fruits/${updatedFruit._id}`);
    }
  );
});

module.exports = router;
