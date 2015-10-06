

var mongoose = require('mongoose');

var CompanySchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: String,
  users: [{
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  }]
})

module.exports = mongoose.model('Company', CompanySchema);
