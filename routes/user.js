const express = require('express');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const router = express.Router();
const validateRegiterInput = require('../validations/register');
const validateLoginInput = require('../validations/login');

const User = require('../modals/User');

router.post('/register', function(req, res) {
  const { errors, isValid }  = validateRegiterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ email: req.body.email }).then( user => {
    if (user) {
      return res.status(400).json({
        email: "Don't try to fool me. You've already registered."
      })
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: '200',
        r: 'pg',
        d: 'mm'
      });

      const newUser = new user({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        avatar
      })

      bcrypt.genSalt(10, (err, salt) => {
        if (err) console.error('Oopss, there was an error', err)
        else {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) console.error('Oopss, there was an error', err)
            else {
              newUser.password = hash;
              newUser.save().then(user => {
                res.json(user)
              });
            }
          });
        }
      });
    }
  });
});

router.post('/login', function(req, res) {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({email}).then(user => {
    if(!user) {
      errors.email = 'It happens but maybe you forgot to register because user not found!';
      return res.status(404).json(errors);
    }

    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = {
          id: user.id,
          name: user.name,
          avatar: user.avatar,
        }
        jwt.sign(payload, 'secret', {
          expiresIn: 3600
        }, (err, token) => {
          if (err) console.error('There is some error in token', err);
          else {
            res.json({
              success: true,
              token: `Bearer ${token}`
            });
          }
        });
      } else {
        errors.password = "I think you forgot your password. If not then enter correct next time."
        return res.status(400).json(errors);
      }
    })
  })
})

router.get('/me', passport.authenticate('jwt', {session: false}), function(req, res) {
 return res.json({
   id: req.body.id,
   name: req.body.name,
   email: req.body.email,
 })
})

module.exports = router;