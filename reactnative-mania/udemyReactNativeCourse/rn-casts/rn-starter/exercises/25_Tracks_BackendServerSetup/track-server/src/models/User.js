const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
/* below schema will be used for validating User */
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

/* 
To hash a password:

Technique 1 (generate a salt and hash on separate function calls):

bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        // Store hash in your password DB.
    });
});

Technique 2 (auto-gen a salt and hash):

bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    // Store hash in your password DB.
});
*/

// method called just before user.save action
userSchema.pre("save", function (next) {
  const user = this;

  // if we get past this check then that means we need to hash password..
  // this helps to make sure that we never hash a already hashed password

  if (!user.isModified("password")) {
    return next();
  }

  /* we selected the technique one to hash a password..in this technique we
  nest bcrypt.hash inside bcrypt.genSalt..
   */
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);          // concept of stopping flow in case of err
    }

    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) {
        return next(err);        // concept of stopping flow in case of err
      }
      user.password = hash;
      next();
    });
  });
});

/* 
To check a password:
// Load hash from your password DB.
bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
    // result == true
});
bcrypt.compare(someOtherPlaintextPassword, hash, function(err, result) {
    // result == false
});
*/

/* Below we use function syntax instead of arrow syntax because we want
"this" to point to user..this comparePassword method is called from signin
route.. */
userSchema.methods.comparePassword = function (candidatePassword) {
  console.log("in compare password..");
  const user = this;

  /* promisifying bcrypt.compare */
  return new Promise((resolve, reject) => {
    bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
      if (err) {
        return reject(err);
      }

      if (!isMatch) {
        return reject(false);
      }

      resolve(true);
    });
  });
};

mongoose.model("User", userSchema);

/* 
Why is async mode recommended over sync mode?
If you are using bcrypt on a simple script, using the sync mode is perfectly fine. 
However, if you are using bcrypt on a server, the async mode is recommended. This 
is because the hashing done by bcrypt is CPU intensive, so the sync version will 
block the event loop and prevent your application from servicing any other inbound 
requests or events. The async version uses a thread pool which does not block the 
main event loop.
*/
