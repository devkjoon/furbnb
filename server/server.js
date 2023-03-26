// Importing required modules
const express = require('express'); // Express.js for creating web server
const { ApolloServer } = require('apollo-server-express'); // Apollo Server for implementing GraphQL API
const path = require('path'); // Path module for dealing with file paths
const { authMiddleware } = require('./utils/auth'); // Custom middleware function for authentication
const { typeDefs, resolvers } = require('./schemas'); // Type definitions and resolvers for GraphQL
const db = require('./config/connection'); // MongoDB database connection
const { Pet } = require('./models'); // Pet model for interacting with Pet collection in the database

// Defining the port number to run the server on
const PORT = process.env.PORT || 3001;

// Creating an instance of Express.js web server
const app = express();

// Creating an instance of Apollo Server
const server = new ApolloServer({
  typeDefs, // GraphQL type definitions
  resolvers, // GraphQL resolvers
  context: authMiddleware, // Custom middleware function for authentication
});

// Parsing incoming request bodies in middleware functions
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serving the production build of the client application in production mode
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// Serving the index.html file of the client application
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Starting the server
async function startServer() {
  await server.start(); // Starting Apollo Server
  server.applyMiddleware({ app }); // Applying Apollo Server middleware to the Express.js web server

  db.once('open', () => { // Connecting to MongoDB database and starting the Express.js web server
    app.listen(PORT, () => {
      console.log(`API server running on port ${ PORT }!`); // Logging message to console on successful server start
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`); // Logging message to console with the GraphQL endpoint URL
});
  });
}

startServer(); // Calling the function to start the server