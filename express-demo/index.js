const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

//start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
}); 

//http is a built-in module in Node.js that allows you to create an HTTP server.
//In this code, we are using the Express framework to create a web server that listens 
//on port 3000 and responds with "Hello, World!" when the root URL is accessed. 
