// Importing Mongoose module
const mongoose = require('mongoose');
require('dotenv').config();

// Establishing connection with MongoDB
mongoose.connect(
process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/db', // If a connection URI is specified in environment variables, use that, otherwise use local URL.
{
useNewUrlParser: true,
useUnifiedTopology: true,
}
);

// Exporting the database connection object
module.exports = mongoose.connection;