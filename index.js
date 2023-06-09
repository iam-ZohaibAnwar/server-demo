
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); 

// Define your API routes
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.post('/api/data', (req, res) => {
  // Handle your API logic here
  const data = { message: 'This is your API response' , response: req.body };
  res.send(data);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});