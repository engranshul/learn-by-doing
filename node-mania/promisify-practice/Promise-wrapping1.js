/* 
Not long ago I had to validate a JWT token with the jsonwebtoken lib. 
It provides an async validation function that follows the common Node.js 
callback style: taking a (err, value) => ... function as the last
argument. Using callbacks is the preferred Node way to deal with async
code, however I’d rather use promises and the new async/await syntax.
*/

const jwt = require("jsonwebtoken");

const verifyToken = (token) =>
  new Promise((resolve, reject) => {
    jwt.verify(
      token,
      CERTIFICATE,
      { algorithms: ["RS256"] },
      (error, payload) => {
        if (error) {
          reject(error);
        } else {
          resolve(payload);
        }
      }
    );
  });

/* 
  Output will be : Cannot find module 'jsonwebtoken'

  But for understanding remember that it can be done
*/


/* 
Above version can also be used with async await async await 
requires promsises..

  const usefulFunction = async () => {
  try {
    const payload = await verifyToken(token);
    return payload;
  } catch(e) {
    console.error("Bad token", e);
  }
};
*/
