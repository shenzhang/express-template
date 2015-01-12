var login = require('./routes/login');
var index = require('./routes/index');
var users = require('./routes/users');

module.exports.setup = function(app) {
  app.use('/', index);
  app.use('/login', login);
  app.use('/users', users);
};