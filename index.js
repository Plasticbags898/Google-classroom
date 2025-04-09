// Example: Replace this with Ultraviolet's middleware in real use
const express = require('express');
const router = express.Router();

router.get('*', (req, res) => {
  res.send('Ultraviolet proxy backend placeholder.');
});

module.exports = router;