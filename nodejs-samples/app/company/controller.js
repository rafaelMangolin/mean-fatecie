var Company = require('./model'),
  Controller = {};

Controller.getCompanies = getCompanies;
Controller.getCompanyById = getCompanyById;
Controller.updateCompany = updateCompany;
Controller.saveCompany = saveCompany;
Controller.deleteCompany = deleteCompany;

module.exports = Controller;

function getCompanies(req, res) {
  Company.find({}, function(err, companies) {
    if (!!err) res.send(err);
    res.json(companies);
  })
}

function getCompanyById(req, res) {
  var id = req.params.uid;
  Company.findById(id, function(err, company) {
    if (!!err) res.send(err);
    res.json(company);
  })

}

function updateCompany(req, res) {
  var id = req.params.uid,
    companyToUpdate = req.body;
  if (companyToUpdate._id) delete companyToUpdate._id;
  Company.update({
    _id: id
  }, companyToUpdate, {
    multi: false,
    upsert: true
  }, function(err) {
    if (!!err) res.send(err);
    res.send({
      content: "OK"
    });
  })
}

function saveCompany(req, res) {
  var newCompany = new Company(req.body);
  Company.create(newCompany, function(err, created) {
    if (err) res.send(err)
    res.json({
      content: "OK"
    });
  })

}

function deleteCompany(req, res) {
  var id = req.params.uid;
  Company.find({
    _id: id
  }).remove(function(err) {
    if (!!err) res.send(err);
    res.json({
      content: "OK"
    });
  })
}
