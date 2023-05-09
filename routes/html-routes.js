const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
  const indexPath = path.join(__dirname, '../public/index.html');
  res.sendFile(indexPath);
});

router.get('/notes', (req, res) => {
  const notesPath = path.join(__dirname, '../public/notes.html');
  res.sendFile(notesPath);
});

module.exports = router;