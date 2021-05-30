const jwt = require('jsonwebtoken'),
const BearerStrategy = require('passport-http-bearer').Strategy;

passport.use(new LocalStrategy(function(username, password, cb) {
    var user = users.filter(function(u) {
      return u.username === username && u.password === password
    });
    if (user.length === 1) {
      return cb(null, user[0]);
    } else {
      return cb(null, false);
    }
}));