const mongoose = require('mongoose');
require('dotenv').config();
// const uri = `mongodb+srv://alexandriacwhite:Vanderbilt1@cluster0.uwnpucz.mongodb.net/furbnb?retryWrites=true&w=majority`;
// console.log(uri);
// console.log(process.env.MONGODB_URI);
// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;
// const app = require('express')();
// const { ApolloServer } = require('apollo-server-express');
// const path = require('path');
// const { authMiddleware } = require(`${__dirname}/../utils/auth`);
// const { typeDefs, resolvers } = require(`${__dirname}/../schemas`);
// const { Pet } = require(`${__dirname}/../models`);
// const PORT = process.env.PORT || 3001;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//   console.log('Connected to the database!');
//   startServer();
// });

// function startServer() {
//   const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//     context: authMiddleware,
//   });

//   app.use(require('body-parser').json());

//   if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '../client/build')));
//   }

//   app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/build/index.html'));
//   });

//   server.start().then(() => {
//     server.applyMiddleware({ app });

//     app.listen(PORT, () => {
//       console.log(`API server running on port ${PORT}!`);
//       console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
//     });
//   });
// }

// module.exports = db;

// const mongoose = require('mongoose');
// const express = require('express');
// const { ApolloServer } = require('apollo-server-express');
// const path = require('path');
// const { authMiddleware } = require(`${__dirname}/../utils/auth`);
// const { typeDefs, resolvers } = require(`${__dirname}/../schemas`);
// const { Pet } = require(`${__dirname}/../models`);
// require('dotenv').config();

// const uri = process.env.MONGODB_URI || 'mongodb+srv://alexandriacwhite:Vanderbilt1@cluster0.uwnpucz.mongodb.net/furbnb?retryWrites=true&w=majority';
// const app = express();
// const PORT = process.env.PORT || 3001;

// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//   console.log('Connected to the database!');
//   startServer();
// });

// function startServer() {
//   const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//     context: authMiddleware,
//   });

//   app.use(require('body-parser').json());

//   if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '../client/build')));
//   }

//   app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/build/index.html'));
//   });

//   server.start().then(() => {
//     server.applyMiddleware({ app });
//   });

//   app.listen(PORT, () => {
//     console.log(`API server running on port ${PORT}!`);
//     console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
//   });
// }

// module.exports = db;
require('dotenv').config();

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
const cluster = process.env.MONGODB_CLUSTER;
const database = process.env.MONGODB_DATABASE;

const uri = `mongodb+srv://${username}:${password}@${cluster}.uwnpucz.mongodb.net/${database}?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to the database!');
});

module.exports = db;

