var User = require('./model'),
    Company = require('../company/model'),
  Controller = {};

Controller.getUser = getUser;
Controller.getUserById = getUserById;
Controller.updateUser = updateUser;
Controller.saveUser = saveUser;
Controller.deleteUser = deleteUser;

module.exports = Controller;

function getUser(req, res) {
  User.find()
  .populate('company').exec( function(err, users) {
    if (!!err) res.send(err);
    res.json(users);
  })
}

function getUserById(req, res) {
  var id = req.params.uid;
  User.findById(id).populate('company').exec(function(err, user) {
    if (!!err) res.send(err);
    res.json(user);
  })

}

function updateUser(req, res) {
  var id = req.params.uid,
    userToUpdate = req.body;
  if (userToUpdate._id) delete userToUpdate._id;
  User.update({
    _id: id
  }, userToUpdate, {
    multi: false,
    upsert: true
  }, function(err) {
    if (!!err) res.send(err);
    res.send({
      content: "OK"
    });
  })
}

function saveUser(req, res) {
  var newUser = new User(req.body);
  User.create(newUser, function(err, created) {
    if (err) res.send(err);
    res.json({
      content: "OK"
    });
  })

}

function deleteUser(req, res) {
  var id = req.params.uid;
  User.find({
    _id: id
  }).remove(function(err) {
    if (!!err) res.send(err);
    res.json({
      content: "OK"
    });
  })
}
