// TODO: need to understand this whole file

const JWTStretegy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = mongoose.model('users');
const opts = {};

opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
opts.secretOrKey =  process.env.SECRET || 'Whats my secret';

module.exports = passport => {
  passport.use(new JWTStretegy(opts, (jwt_payload, done) => {
    User.findById(jwt_payload.id).then(user => {
      if(user) {
        return done(null, user);
      }
      return done(null, false);
    }).catch(err => console.error(err));
  }))
}