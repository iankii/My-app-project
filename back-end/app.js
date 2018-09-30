const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const config = require('./db');
const users = require('./routes/user')

mongoose.connect(config.DB, { useNewUrlParser: true}).then(() => {
  console.log('Database is connected');
}, err => {
  console.log('Oopsss, cant connect to database', err);
})

const app = new express();
const PORT = process.env.PORT || 5000;

app.use(passport.initialize());

require('./passport')(passport);

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/api/users', users);

app.get('/', function(req, res) {
  res.send('hello there')
})

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});