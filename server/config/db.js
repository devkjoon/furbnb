const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/db',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);


const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

module.exports = db;
