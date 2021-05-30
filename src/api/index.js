const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const config = require('../lib/config');
const logger = require('../lib/logger');

const log = logger(config.logger);
const app = express();
const cors = require('cors');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.use(cors());

var secret = 'super secret';

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const BearerStrategy = require('passport-http-bearer').Strategy;
const jwt = require('jsonwebtoken');

const {findUser} = require('./services/users');

passport.use(new LocalStrategy(
  async function(email, password, done) {
    const user = await findUser({email});
    if (!user || user.pass !== password) {
        return done (null, false);
    }
    return done(null, user);
  }
));

passport.use(new BearerStrategy(async (token, cb) => {
  jwt.verify(token, secret, async function(err, decoded) {
    if (err) return cb(err);
    const user = await findUser({email: decoded.id});
    return cb(null, user ? user : false);
  });
}));

app.use(passport.initialize());

app.post('/api/v1.0/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) return next(err);
    if (!user) {
      return res.status(401).json({ status: 'error', code: 'unauthorized' });
    } else {
      return res.json({ token: jwt.sign({id: user.email}, secret) });
    }
  })(req, res, next);
});

app.all('*', function(req, res, next) {
  passport.authenticate('bearer', function(err, user, info) {
    if (err) return next(err);
    if (user) {
      req.user = user;
      return next();
    } else {
      return res.status(401).json({ status: 'error', code: 'unauthorized' });
    }
  })(req, res, next);
});

app.post('/api/v1.0/signup', async (req, res, next) => {
  const {email, first_name, surname, id_status, phone, birthday} = req.user;
  res.json({
    user: {
      email,
      firstName: first_name,
      surname: surname,
      phone,
      type: id_status,
      birthday
    }
  });
}
);

/*
 * Routes
 */
app.use('/api/v1.0/cars', require('./routes/cars'));
app.use('/api/v1.0/marks', require('./routes/marks'));
app.use('/api/v1.0/users', require('./routes/users'));
app.use('/api/v1.0/test-drive', require('./routes/test-drives'));
app.use('/api/v1.0/inspections', require('./routes/inspections'));
app.use('/api/v1.0/countries', require('./routes/countries'));

// catch 404
app.use((req, res, next) => {
  log.error(`Error 404 on ${req.url}.`);
  res.status(404).send({ status: 404, error: 'Not found' });
});

// catch errors
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const msg = err.error || err.message;
  log.error(`Error ${status} (${msg}) on ${req.method} ${req.url}`);
  res.status(status).send({ status, error: msg });
});


module.exports = app;
