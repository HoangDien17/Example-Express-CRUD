const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authorizationHeader = req.headers['authorization'];
  console.log(authorizationHeader)
  const token = authorizationHeader.split(' ')[1];
  if(!token) {
    return res.status(403).send({ message: "No token provided!" });
  }
  jwt.verify(token, process.env.SECRET_TEXT, (err, payload) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized!" });
    }
    req.payload = payload
    console.log(payload)
  });
  next();
}