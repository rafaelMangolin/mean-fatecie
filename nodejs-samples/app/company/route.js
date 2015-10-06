
var Controller = require('./controller');
module.exports = function (app) {
  var url = '/api/movie';

  app.get(url, Controller.getCompanies)

  app.get(url + '/:uid', Controller.getCompanyById)

  app.put(url + '/:uid', Controller.updateCompany)

  app.post(url, Controller.saveCompany)

  app.delete(url + '/:uid', Controller.deleteCompany)
}
