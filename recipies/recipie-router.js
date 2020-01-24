const express = require('express');

const Recipies = require('./recipie-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Recipies.getRecipies()
    .then(recipies => {
      res.json(recipies);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get recipies' });
    });
  });
  
  router.get('/:id/shoppingList', (req, res) => {
    Recipies.getShoppingList(req.params.id)
    .then(ingredients => {
      res.json(ingredients);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get shopping list' });
    });
  });

router.get('/:id/instructions', (req, res) => {
    Recipies.getInstructions(req.params.id)
    .then(instructions => {
      res.json(instructions);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get instructions' });
    });
  });


  module.exports = router