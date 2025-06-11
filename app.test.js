const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// Copy your routes from app.js here or import your app from app.js if modularized

let tasks = [];
let idCounter = 1;

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const task = { id: idCounter++, title: req.body.title || 'Untitled Task', completed: false };
  tasks.push(task);
  res.status(201).json(task);
});

// Sample simple test
describe('GET /tasks', () => {
  it('should return empty task list initially', async () => {
    const res = await request(app).get('/tasks');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual([]);
  });
});

