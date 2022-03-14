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
    enum: ["Male", "Female", "Other"],
    required: true
  },
  pfgender: {
    type: String,
    enum: ['Men', 'Women', 'Anyone'],
    required: true
  },
  playage: {
    type: String,
    enum: ["I would prefer to play with people in my age group.", "I'm comfortable with any age group."],
    required: true
  },
  drinker: {
    type: String,
    enum: ["I can drink a beer or two.", "I don't mind others drinking.", "No Alcohol Please.", "Lets get drunk!"],
    required: true
  },
  meticulous: {
    type: String,
    enum: ['I take my time in preparing for a shot.', "I play fast. I don't like to wait.", 'I play at a good pace.'],
    required: true
  },
  etiquette: {
    type: String,
    enum: ['Rules Are RULES!', 'I dont mind how others play.', 'I would like others to have some etiquette.'],
    required: true
  },
  skillset: {
    type: String,
    enum: ['I can play with any skill type.', 'I prefer to play with people within my handicap range.', 'I dont mind as long as there isnt a huge disparity in handicap.'],
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