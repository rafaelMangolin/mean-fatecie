var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  company: {
    type: mongoose.Schema.ObjectId,
    ref: 'Company'
  }
})

module.exports = mongoose.model('User', UserSchema);
