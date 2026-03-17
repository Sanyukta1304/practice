const express = require('express');
const app = express();

//database con 
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true }); 

const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});
const userModel = mongoose.model('User', userSchema);

app.get('/', (req, res) => {
  console.log(req.query); // Log the query parameters
  res.send('Hello, World!');
});

//start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
}); 

//http is a built-in module in Node.js that allows you to create an HTTP server.
//In this code, we are using the Express framework to create a web server that listens 
//on port 3000 and responds with "Hello, World!" when the root URL is accessed. 
