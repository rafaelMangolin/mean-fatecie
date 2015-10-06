var Controller = require('./controller');

module.exports = function(app) {
  var url = '/api/user';

  app.get(url, Controller.getUser)

  app.get(url + '/:uid', Controller.getUserById)

  app.put(url + '/:uid', Controller.updateUser)

  app.post(url, Controller.saveUser)

  app.delete(url + '/:uid', Controller.deleteUser)
}
