const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  }
})

const User = mongoose.model('users', UserSchema)

module.exports = User

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const UserSchema = new Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true
//   },
//   password: {
//     type: String,
//     required: true
//   },
//   avatar: {
//     type: String
//   },
//   date: {
//     type: Date,
//     default: Date.now
//   },
//   role: {
//     type: String,
//     default: Date.now
//   }
// });

// const User = mongoose.model('users', UserSchema);

// module.exports = User;