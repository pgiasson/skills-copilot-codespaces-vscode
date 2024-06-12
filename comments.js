// Create web server
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;
const comments = [];

app.use(bodyParser.json());

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  comments.push(req.body);
  res.json(req.body);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});