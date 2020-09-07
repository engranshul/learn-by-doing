const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = mongoose.model("User");

module.exports = (req, res, next) => {
  
//  authorization === 'Bearer laksjdflaksdjasdfklj'
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).send({ error: "You must be logged in." });
  }

  const token = authorization.replace("Bearer ", "");

  /* in signup process we used jwt.sign method..we used userId and secret key 
  to generate token..in this file we are doing just opposite..we are using
  jwt.verify method to get user id from token and secret key.. */
  jwt.verify(token, "MY_SECRET_KEY", async (err, payload) => {
    if (err) {
      return res.status(401).send({ error: "You must be logged in." });
    }

    const { userId } = payload;
    console.log("userId is ", userId);
  /* see how once we find userId from token..we are using userId to fetch User
  from mongo.. */
    const user = await User.findById(userId);
    req.user = user;
    next();
  });
};
