const express = require('express');
const path = require('path');
const router = express.Router();

// Serving routes
router.get('/fashionstore', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'fashionstore.html'));
  });


  router.get('/registration', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'registration.html'));
  });

  module.exports = router;