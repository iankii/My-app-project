const express = require('express');
const mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const passport = require('passport');
// ... other imports
const path = require("path")
require("dotenv").config()

const config = require('./db');
const users = require('./routes/user')

// MongoClient.connect(process.env.MONGODB_URI || config.DB, { useNewUrlParser: true}, (err, db) => {
//   if(err) {
//     console.log('Oopsss, cant connect to database', err);
//   } else {
//     console.log('Database is connected');
//   }
// })
mongoose.connect(process.env.MONGODB_URI || config.DB, { useNewUrlParser: true}).then(() => {
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

// app.get('/', function(req, res) {
//   res.send('hello there')
// })



// ... other app.use middleware setups
app.use(express.static(path.join(__dirname, "client", "build")))

// ...
// Right before your app.listen(), add this:
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});