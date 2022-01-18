const express = require('express');

const app = express();
const cors = require('cors');
// eslint-disable-next-line no-unused-vars
const pool = require('./db');

const PORT = 5000;

// middleware
app.use(cors());
app.use(express.json());

// ROUTES
// create a todo

// get all todos

// get a todo

// update a todo

// delete a todo

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on PORT ${PORT}`);
});
