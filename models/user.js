const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const SALT_ROUNDS = 6;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    trim: true,
    minlength: 3,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  citystate: {
    type: String,
    required: true
  },
  handicap: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    required: true
  },
  pfgender: {
    type: String,
    enum: ['men', 'women', 'anyone'],
    required: true
  },
  drinker: {
    type: String,
    enum: ['lightdrink', 'othersdrink', 'no alcohol', 'drunk'],
    required: true
  },
  meticulous: {
    type: String,
    enum: ['slowplayer', 'fastplayer', 'notslow'],
    required: true
  },
  etiquette: {
    type: String,
    enum: ['stickler', 'lax', 'somerules'],
    required: true
  },
  skillset: {
    type: String,
    enum: ['anylevel', 'mylevel', 'somelevel'],
    required: true
  },
}, {
  timestamps: true,
  toJSON: {
    transform: function(doc, ret) {
      delete ret.password;
      return ret;
    }
  }
});

userSchema.pre('save', async function(next) {
  // 'this' is the use document
  if (!this.isModified('password')) return next();
  // update the password with the computed hash
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
  return next();
});

module.exports = mongoose.model('User', userSchema);