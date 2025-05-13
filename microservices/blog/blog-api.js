const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let posts = [
  { id: 1, title: 'First Post', content: 'Hello, World!' }
];

app.get('/api/posts', (req, res) => {
  res.json(posts);
});

app.post('/api/posts', (req, res) => {
  const post = { id: posts.length + 1, ...req.body };
  posts.push(post);
  res.status(201).json(post);
});

app.listen(port, () => {
  console.log(`Blog API running on port ${port}`);
});