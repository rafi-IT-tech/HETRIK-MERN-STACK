const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    fullname: String,
    password: String,
  });

const User = mongoose.model("User", userSchema)

module.exports = User;

// // models/user.js
// module.exports = (mongoose) => {
//     const userSchema = new mongoose.Schema({
//       username: String,
//       email: String,
//       fullname: String,
//       password: String,
//     });
  
//     const User = mongoose.model("User", userSchema);
  
//     return User;
//   };
  