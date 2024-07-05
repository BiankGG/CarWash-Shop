const bcrypt = require("bcrypt");

//arrow f. make promise, bcrypt property(genSalt,10)
const hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        reject(err);
      }
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          reject(err);
        }
        resolve(hash);
      });
    });
  });
};

const comparePassword = (password,hashed)=>{
    return bcrypt.compare(password,hashed)

}


module.exports={
    hashPassword,
    comparePassword
}


//Salt and Hash Passwords with bcrypt
// const saltRounds = 10;
// var password = "Fkdj^45ci@Jad";
// bcrypt.genSalt(saltRounds, function(err, salt) {
//     // returns salt
//   });

//   bcrypt.genSalt(saltRounds, function(err, salt) {
//     bcrypt.hash(password, salt, function(err, hash) {
//     // returns hash
//     console.log(hash);
//     });
//   });
//   bcrypt.genSalt(saltRounds, function(err, salt) {
//     bcrypt.hash(password, salt, function(err, hash) {
//     // Store hash in database here
//     });
//   });
  
//   When we put all the steps together, we get:
  
//   ```js
//   const bcrypt = require ('bcrypt');
  
//   const saltRounds = 10;
//   var password = "Fkdj^45ci@Jad";
  
//   bcrypt.genSalt(saltRounds, function(err, salt) {
//     bcrypt.hash(password, salt, function(err, hash) {
//               // Store hash in database here
//      });
//   });