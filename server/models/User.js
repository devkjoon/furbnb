const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// Define a new mongoose schema for User model
const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  pets: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Pet',
    },
  ],
});

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password') || this.isModified('firstName') || this.isModified('lastName')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
    this.name = `${this.firstName} ${this.lastName}`;
  }

  next();
});

const User = model('User', userSchema);

module.exports = User;
