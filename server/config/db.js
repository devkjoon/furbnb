const mongoose = require('mongoose');
require('dotenv').config();


const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
const cluster = process.env.MONGODB_CLUSTER;
const database = process.env.MONGODB_DATABASE;

const uri = `mongodb+srv://${username}:${password}@${cluster}.uwnpucz.mongodb.net/${database}?retryWrites=true&w=majority`;
// FOR COULSON DONT TOUCH
// const uri = 'mongodb://127.0.0.1:27017/furbnbdb';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.set('strictQuery', false);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to the database!');
});

module.exports = db;

