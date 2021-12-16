const express = require("express");
const jwt = require("jwt-simple");

const app = express();
const port = 3000;

const secretKey = "my_secret_key";

const jwtMiddleware = function (req, res, next) {
  try {
    console.log(req.headers);
    let tokenValidado = jwt.decode(req.headers.authorization, secretKey);
    console.log(tokenValidado);
    next();
  } catch (err) {
    res.status(400).send("token invalidado");
  }
};

app.get("/generateJwt", (req, res) => {
  const data = {};
  let tokenGenerado = jwt.encode(data, secretKey);
  res.send(tokenGenerado);
});

app.get("/validateJwt", jwtMiddleware, (req, res) => {
  res.send("token validado");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
