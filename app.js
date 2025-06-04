// app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

// In-memory task store (array)
let tasks = [];
let idCounter = 1;

// Get all tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Create a new task
app.post('/tasks', (req, res) => {
  const task = { id: idCounter++, title: req.body.title || 'Untitled Task', completed: false };
  tasks.push(task);
  res.status(201).json(task);
});

// Update a task by id
app.put('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find(t => t.id === id);
  if (!task) return res.status(404).json({ message: 'Task not found' });
  
  task.title = req.body.title !== undefined ? req.body.title : task.title;
  task.completed = req.body.completed !== undefined ? req.body.completed : task.completed;
  
  res.json(task);
});

// Delete a task by id
app.delete('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) return res.status(404).json({ message: 'Task not found' });

  tasks.splice(index, 1);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Task Manager API running on port ${PORT}`);
});

