// Add functionality to the routes below

const notes = require('express').Router();
const db = require('../db/db.json');

notes.get('/', (req, res) => 
  res.json(db)
);

// notes.post('/', (req, res) => {
   //TODO: `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).
// });

// notes.delete('/', (req, res) => {
  //TODO:  `DELETE /api/notes/:id` should receive a query parameter that contains the id of a note to delete. To delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.
// });


module.exports = notes