// Create web server
// 1. Load express
// 2. Create an instance of express
// 3. Create a route to handle incoming HTTP GET requests
// 4. Start the server on port 3000

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Send a response to the client
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Run the server
// 1. Open the terminal
// 2. Navigate to the project folder
// 3. Run the server with node comments.js
// 4. Open the browser and go to http://localhost:3000
// 5. You should see the message "Hello World!" in the browser

// Handling different HTTP methods
// 1. Create a route for POST requests
// 2. Create a route for PUT requests
// 3. Create a route for DELETE requests
// 4. Test the routes with Postman

app.post('/', (req, res) => {
  res.send('You made a POST request');
});

app.put('/', (req, res) => {
  res.send('You made a PUT request');
});

app.delete('/', (req, res) => {
  res.send('You made a DELETE request');
});

// Middleware
// 1. Create a middleware function to log the request method and URL
// 2. Use the middleware function in the route

const logger = (req, res, next) => {
  console.log(`Received a ${req.method} request for ${req.url}`);
  next();
};

app.get('/', logger, (req, res) => {
  res.send('Hello World!');
});

// Error handling
// 1. Create a route that throws an error
// 2. Create a middleware function to handle the error
// 3. Use the error handling middleware in the route

app.get('/error', (req, res) => {
  throw new Error('This is a simulated error');
});

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong');
};

app.use(errorHandler);

// Serve static files
// 1. Create a public folder with an index.html file