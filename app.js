const express = require('express');
const app = express();
const path = require('path');
const taskRoutes = require('./routes/tasks');

app.use(express.json());

app.use('/tasks', taskRoutes);

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});

app.listen(8081, () => {
    console.log('Listening on port 8081');
});