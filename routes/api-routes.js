const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

router.get('/api/notes', async (req, res) => {
  const data = await fs.promises.readFile('db/db.json', 'utf8');
  const notes = JSON.parse(data);
  res.json(notes);
});

router.post('/api/notes', (req, res) => {
  const data = fs.readFileSync('db/db.json', 'utf8');
  const notes = JSON.parse(data);
  const newNote = {
    id: uuidv4(),
    title: req.body.title,
    text: req.body.text,
  };
  notes.push(newNote);
  fs.writeFileSync('db/db.json', JSON.stringify(notes));
  res.json(newNote);
});

router.delete('/api/notes/:id', (req, res) => {
  const data = fs.readFileSync('db/db.json', 'utf8');
  const notes = JSON.parse(data);
  const filteredNotes = notes.filter(note => note.id !== req.params.id);
  fs.writeFileSync('db/db.json', JSON.stringify(filteredNotes));
  res.json({ message: 'Note deleted' });
});

module.exports = router;