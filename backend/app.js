const express = require('express');
const app = express();
app.use(express.json()); 

// routes
app.post('/add', (req, res) => {
  const {number1, number2} = req.body;
  const output = Number(number1) + Number(number2);
  res.json({output: output});
});

app.post('/subtract', (req, res) => {
  const {number1, number2} = req.body;
  const output = Number(number1) - Number(number2);
  res.json({output: output});
});

module.exports = app;