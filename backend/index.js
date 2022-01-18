/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const express = require('express');
require('dotenv').config();

const app = express();
const cors = require('cors');
const pool = require('./db');

const PORT = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json()); // req.body

// ROUTES
// create a todo
app.post('/todos', async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query('INSERT INTO todo(description) VALUES($1) RETURNING *', [description]);
    res.json(newTodo.rows[0]);
  } catch (error) {
    console.log(error);
  }
});

// get all todos

app.get('/todos', async (req, res) => {
  try {
    const allTodos = await pool.query('SELECT * FROM todo ORDER BY todo_id');
    res.json(allTodos.rows);
  } catch (error) {
    console.log(error);
  }
});

// get a todo
app.get('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query('SELECT * FROM todo WHERE todo_id = $1', [id]);
    res.json(todo.rows[0]);
  } catch (error) {
    console.log(error);
  }
});

// update a todo
app.put('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query('UPDATE todo SET description = $1 WHERE todo_id = $2 RETURNING *', [description, id]);
    res.json(updateTodo.rows[0]);
  } catch (error) {
    console.log(error);
  }
});

// delete a todo
app.delete('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query('DELETE FROM todo WHERE todo_id = $1 RETURNING *', [id]);
    res.json(deleteTodo.rows[0]);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
