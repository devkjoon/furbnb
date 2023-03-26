const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// Define a new mongoose schema for User model
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true, // username should be unique
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // email should be unique
    match: [/.+@.+..+/, 'Must match an email address!'], // validate email format
  },
  password: {
    type: String,
    required: true,
    minlength: 5, // password should be at least 5 characters
  },
  pets: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Pet', // reference to Pet model
    },
  ],
});

// Hash the password before saving the user to the database
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// Method to validate user's password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// Create a User model using the userSchema
const User = model('User', userSchema);

// Export the User model
module.exports = User;
