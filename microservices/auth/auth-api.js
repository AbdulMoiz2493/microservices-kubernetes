const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

const users = [
  { id: 1, username: 'admin', password: 'password' }
];

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    res.json({ token: 'fake-jwt-token' });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

app.listen(port, () => {
  console.log(`Auth API running on port ${port}`);
});